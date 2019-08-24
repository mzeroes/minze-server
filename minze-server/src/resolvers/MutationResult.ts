import {MutationResultResolvers} from '../schema/generated/resolvers';
import {TypeMap} from './types/TypeMap';

export interface MutationResultParent {
  success: boolean;
}

export const MutationResult: MutationResultResolvers.Type<TypeMap> = {
  success: parent => parent.success
};
