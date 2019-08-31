import {getUserId} from '../../context';
import {QueryResolvers} from '../generated/resolvers';
import {TypeMap} from '../types/TypeMap';
import {ViewerParent} from './Viewer/Viewer';
import {LocationParent} from '../Location/Location';
import {RestaurantParent, Restaurant} from '../Restaurant/Restaurant';
import {NeighbourhoodParent} from '../Location/Neighbourhood/Neighbourhood';
import { Context } from '../types/Context';

export interface QueryParent {
  topExperiences: Promise<RestaurantParent[]>;
  topRestaurants: Promise<RestaurantParent[]>;
  topReservations: Promise<RestaurantParent[]>;
  featuredDestinations: [NeighbourhoodParent];
  viewer: ViewerParent;
  myLocation: LocationParent;
}

export const Query: QueryResolvers.Type<TypeMap|any> = {
  topExperiences: async (_parent, _args, ctx) => {
    return ctx.db.experiences({orderBy: 'popularity_DESC'});
  },
  topRestaurants: (_parent, _args, ctx: Context) => ctx.db.restaurants({orderBy: 'popularity_DESC'}),
  restaurantsInPriceRange: (_parent, {min, max}, ctx) =>
    ctx.db.restaurants({
      where: {
        AND: [{pricing: {perNight_gte: min}}, {pricing: {perNight_lte: max}}]
      }
    }),
  topReservations: (_parent, _args, ctx) => ctx.db.restaurants({orderBy: 'avgRating_DESC'}),
  featuredDestinations: (_parent, _args, ctx) =>
    ctx.db.neighbourhoods({
      orderBy: 'popularity_DESC',
      where: {featured: true}
    }),
  experiencesByCity: (_parent, {cities}, ctx) =>
    ctx.db.cities({
      where: {
        name_in: cities,
        neighbourhoods_every: {
          id_gt: '0',
          locations_every: {
            id_gt: '0',
            experience: {
              id_gt: '0'
            }
          }
        }
      }
    }),
  viewer: () => ({
    me: null,
    bookings: null
  }),
  myLocation: async (_parent, _args, ctx) => {
    const id = getUserId(ctx);

    const locations = await ctx.db.locations({
      where: {
        user: {
          id
        }
      }
    });

    return locations && locations[0];
  },
  test: () => new Date().toISOString()
};
