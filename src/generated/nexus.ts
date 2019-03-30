/**
 * This file was automatically generated by Nexus 0.11.7
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PhoneNumberWhereInput: { // input type
    AND?: NexusGenInputs['PhoneNumberWhereInput'][] | null; // [PhoneNumberWhereInput!]
    code?: string | null; // String
    code_contains?: string | null; // String
    code_ends_with?: string | null; // String
    code_gt?: string | null; // String
    code_gte?: string | null; // String
    code_in?: string[] | null; // [String!]
    code_lt?: string | null; // String
    code_lte?: string | null; // String
    code_not?: string | null; // String
    code_not_contains?: string | null; // String
    code_not_ends_with?: string | null; // String
    code_not_in?: string[] | null; // [String!]
    code_not_starts_with?: string | null; // String
    code_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['PhoneNumberWhereInput'][] | null; // [PhoneNumberWhereInput!]
    OR?: NexusGenInputs['PhoneNumberWhereInput'][] | null; // [PhoneNumberWhereInput!]
    phone?: string | null; // String
    phone_contains?: string | null; // String
    phone_ends_with?: string | null; // String
    phone_gt?: string | null; // String
    phone_gte?: string | null; // String
    phone_in?: string[] | null; // [String!]
    phone_lt?: string | null; // String
    phone_lte?: string | null; // String
    phone_not?: string | null; // String
    phone_not_contains?: string | null; // String
    phone_not_ends_with?: string | null; // String
    phone_not_in?: string[] | null; // [String!]
    phone_not_starts_with?: string | null; // String
    phone_starts_with?: string | null; // String
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  ProductPhotoWhereInput: { // input type
    AND?: NexusGenInputs['ProductPhotoWhereInput'][] | null; // [ProductPhotoWhereInput!]
    caption?: string | null; // String
    caption_contains?: string | null; // String
    caption_ends_with?: string | null; // String
    caption_gt?: string | null; // String
    caption_gte?: string | null; // String
    caption_in?: string[] | null; // [String!]
    caption_lt?: string | null; // String
    caption_lte?: string | null; // String
    caption_not?: string | null; // String
    caption_not_contains?: string | null; // String
    caption_not_ends_with?: string | null; // String
    caption_not_in?: string[] | null; // [String!]
    caption_not_starts_with?: string | null; // String
    caption_starts_with?: string | null; // String
    friendly_time?: string | null; // String
    friendly_time_contains?: string | null; // String
    friendly_time_ends_with?: string | null; // String
    friendly_time_gt?: string | null; // String
    friendly_time_gte?: string | null; // String
    friendly_time_in?: string[] | null; // [String!]
    friendly_time_lt?: string | null; // String
    friendly_time_lte?: string | null; // String
    friendly_time_not?: string | null; // String
    friendly_time_not_contains?: string | null; // String
    friendly_time_not_ends_with?: string | null; // String
    friendly_time_not_in?: string[] | null; // [String!]
    friendly_time_not_starts_with?: string | null; // String
    friendly_time_starts_with?: string | null; // String
    height?: number | null; // Int
    height_gt?: number | null; // Int
    height_gte?: number | null; // Int
    height_in?: number[] | null; // [Int!]
    height_lt?: number | null; // Int
    height_lte?: number | null; // Int
    height_not?: number | null; // Int
    height_not_in?: number[] | null; // [Int!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['ProductPhotoWhereInput'][] | null; // [ProductPhotoWhereInput!]
    OR?: NexusGenInputs['ProductPhotoWhereInput'][] | null; // [ProductPhotoWhereInput!]
    product?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    thumb_url?: string | null; // String
    thumb_url_contains?: string | null; // String
    thumb_url_ends_with?: string | null; // String
    thumb_url_gt?: string | null; // String
    thumb_url_gte?: string | null; // String
    thumb_url_in?: string[] | null; // [String!]
    thumb_url_lt?: string | null; // String
    thumb_url_lte?: string | null; // String
    thumb_url_not?: string | null; // String
    thumb_url_not_contains?: string | null; // String
    thumb_url_not_ends_with?: string | null; // String
    thumb_url_not_in?: string[] | null; // [String!]
    thumb_url_not_starts_with?: string | null; // String
    thumb_url_starts_with?: string | null; // String
    timestamp?: number | null; // Int
    timestamp_gt?: number | null; // Int
    timestamp_gte?: number | null; // Int
    timestamp_in?: number[] | null; // [Int!]
    timestamp_lt?: number | null; // Int
    timestamp_lte?: number | null; // Int
    timestamp_not?: number | null; // Int
    timestamp_not_in?: number[] | null; // [Int!]
    url?: string | null; // String
    url_contains?: string | null; // String
    url_ends_with?: string | null; // String
    url_gt?: string | null; // String
    url_gte?: string | null; // String
    url_in?: string[] | null; // [String!]
    url_lt?: string | null; // String
    url_lte?: string | null; // String
    url_not?: string | null; // String
    url_not_contains?: string | null; // String
    url_not_ends_with?: string | null; // String
    url_not_in?: string[] | null; // [String!]
    url_not_starts_with?: string | null; // String
    url_starts_with?: string | null; // String
    width?: number | null; // Int
    width_gt?: number | null; // Int
    width_gte?: number | null; // Int
    width_in?: number[] | null; // [Int!]
    width_lt?: number | null; // Int
    width_lte?: number | null; // Int
    width_not?: number | null; // Int
    width_not_in?: number[] | null; // [Int!]
  }
  ProductRatingWhereInput: { // input type
    aggregate_rating?: number | null; // Float
    aggregate_rating_gt?: number | null; // Float
    aggregate_rating_gte?: number | null; // Float
    aggregate_rating_in?: number[] | null; // [Float!]
    aggregate_rating_lt?: number | null; // Float
    aggregate_rating_lte?: number | null; // Float
    aggregate_rating_not?: number | null; // Float
    aggregate_rating_not_in?: number[] | null; // [Float!]
    AND?: NexusGenInputs['ProductRatingWhereInput'][] | null; // [ProductRatingWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['ProductRatingWhereInput'][] | null; // [ProductRatingWhereInput!]
    OR?: NexusGenInputs['ProductRatingWhereInput'][] | null; // [ProductRatingWhereInput!]
    votes?: number | null; // Int
    votes_gt?: number | null; // Int
    votes_gte?: number | null; // Int
    votes_in?: number[] | null; // [Int!]
    votes_lt?: number | null; // Int
    votes_lte?: number | null; // Int
    votes_not?: number | null; // Int
    votes_not_in?: number[] | null; // [Int!]
  }
  ProductWhereInput: { // input type
    all_reviews_every?: NexusGenInputs['ReviewWhereInput'] | null; // ReviewWhereInput
    all_reviews_none?: NexusGenInputs['ReviewWhereInput'] | null; // ReviewWhereInput
    all_reviews_some?: NexusGenInputs['ReviewWhereInput'] | null; // ReviewWhereInput
    AND?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    deeplink?: string | null; // String
    deeplink_contains?: string | null; // String
    deeplink_ends_with?: string | null; // String
    deeplink_gt?: string | null; // String
    deeplink_gte?: string | null; // String
    deeplink_in?: string[] | null; // [String!]
    deeplink_lt?: string | null; // String
    deeplink_lte?: string | null; // String
    deeplink_not?: string | null; // String
    deeplink_not_contains?: string | null; // String
    deeplink_not_ends_with?: string | null; // String
    deeplink_not_in?: string[] | null; // [String!]
    deeplink_not_starts_with?: string | null; // String
    deeplink_starts_with?: string | null; // String
    featured_image?: string | null; // String
    featured_image_contains?: string | null; // String
    featured_image_ends_with?: string | null; // String
    featured_image_gt?: string | null; // String
    featured_image_gte?: string | null; // String
    featured_image_in?: string[] | null; // [String!]
    featured_image_lt?: string | null; // String
    featured_image_lte?: string | null; // String
    featured_image_not?: string | null; // String
    featured_image_not_contains?: string | null; // String
    featured_image_not_ends_with?: string | null; // String
    featured_image_not_in?: string[] | null; // [String!]
    featured_image_not_starts_with?: string | null; // String
    featured_image_starts_with?: string | null; // String
    has_online_delivery?: boolean | null; // Boolean
    has_online_delivery_not?: boolean | null; // Boolean
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    is_delivering_now?: boolean | null; // Boolean
    is_delivering_now_not?: boolean | null; // Boolean
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    OR?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    photo_count?: number | null; // Int
    photo_count_gt?: number | null; // Int
    photo_count_gte?: number | null; // Int
    photo_count_in?: number[] | null; // [Int!]
    photo_count_lt?: number | null; // Int
    photo_count_lte?: number | null; // Int
    photo_count_not?: number | null; // Int
    photo_count_not_in?: number[] | null; // [Int!]
    photos_every?: NexusGenInputs['ProductPhotoWhereInput'] | null; // ProductPhotoWhereInput
    photos_none?: NexusGenInputs['ProductPhotoWhereInput'] | null; // ProductPhotoWhereInput
    photos_some?: NexusGenInputs['ProductPhotoWhereInput'] | null; // ProductPhotoWhereInput
    photos_url?: string | null; // String
    photos_url_contains?: string | null; // String
    photos_url_ends_with?: string | null; // String
    photos_url_gt?: string | null; // String
    photos_url_gte?: string | null; // String
    photos_url_in?: string[] | null; // [String!]
    photos_url_lt?: string | null; // String
    photos_url_lte?: string | null; // String
    photos_url_not?: string | null; // String
    photos_url_not_contains?: string | null; // String
    photos_url_not_ends_with?: string | null; // String
    photos_url_not_in?: string[] | null; // [String!]
    photos_url_not_starts_with?: string | null; // String
    photos_url_starts_with?: string | null; // String
    thumb?: string | null; // String
    thumb_contains?: string | null; // String
    thumb_ends_with?: string | null; // String
    thumb_gt?: string | null; // String
    thumb_gte?: string | null; // String
    thumb_in?: string[] | null; // [String!]
    thumb_lt?: string | null; // String
    thumb_lte?: string | null; // String
    thumb_not?: string | null; // String
    thumb_not_contains?: string | null; // String
    thumb_not_ends_with?: string | null; // String
    thumb_not_in?: string[] | null; // [String!]
    thumb_not_starts_with?: string | null; // String
    thumb_starts_with?: string | null; // String
    url?: string | null; // String
    url_contains?: string | null; // String
    url_ends_with?: string | null; // String
    url_gt?: string | null; // String
    url_gte?: string | null; // String
    url_in?: string[] | null; // [String!]
    url_lt?: string | null; // String
    url_lte?: string | null; // String
    url_not?: string | null; // String
    url_not_contains?: string | null; // String
    url_not_ends_with?: string | null; // String
    url_not_in?: string[] | null; // [String!]
    url_not_starts_with?: string | null; // String
    url_starts_with?: string | null; // String
    user_rating?: NexusGenInputs['ProductRatingWhereInput'] | null; // ProductRatingWhereInput
  }
  ReviewWhereInput: { // input type
    AND?: NexusGenInputs['ReviewWhereInput'][] | null; // [ReviewWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['ReviewWhereInput'][] | null; // [ReviewWhereInput!]
    OR?: NexusGenInputs['ReviewWhereInput'][] | null; // [ReviewWhereInput!]
    product?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    rating?: number | null; // Int
    rating_gt?: number | null; // Int
    rating_gte?: number | null; // Int
    rating_in?: number[] | null; // [Int!]
    rating_lt?: number | null; // Int
    rating_lte?: number | null; // Int
    rating_not?: number | null; // Int
    rating_not_in?: number[] | null; // [Int!]
    review_text?: string | null; // String
    review_text_contains?: string | null; // String
    review_text_ends_with?: string | null; // String
    review_text_gt?: string | null; // String
    review_text_gte?: string | null; // String
    review_text_in?: string[] | null; // [String!]
    review_text_lt?: string | null; // String
    review_text_lte?: string | null; // String
    review_text_not?: string | null; // String
    review_text_not_contains?: string | null; // String
    review_text_not_ends_with?: string | null; // String
    review_text_not_in?: string[] | null; // [String!]
    review_text_not_starts_with?: string | null; // String
    review_text_starts_with?: string | null; // String
    review_time_friendly?: string | null; // String
    review_time_friendly_contains?: string | null; // String
    review_time_friendly_ends_with?: string | null; // String
    review_time_friendly_gt?: string | null; // String
    review_time_friendly_gte?: string | null; // String
    review_time_friendly_in?: string[] | null; // [String!]
    review_time_friendly_lt?: string | null; // String
    review_time_friendly_lte?: string | null; // String
    review_time_friendly_not?: string | null; // String
    review_time_friendly_not_contains?: string | null; // String
    review_time_friendly_not_ends_with?: string | null; // String
    review_time_friendly_not_in?: string[] | null; // [String!]
    review_time_friendly_not_starts_with?: string | null; // String
    review_time_friendly_starts_with?: string | null; // String
    timestamp?: number | null; // Int
    timestamp_gt?: number | null; // Int
    timestamp_gte?: number | null; // Int
    timestamp_in?: number[] | null; // [Int!]
    timestamp_lt?: number | null; // Int
    timestamp_lte?: number | null; // Int
    timestamp_not?: number | null; // Int
    timestamp_not_in?: number[] | null; // [Int!]
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  UserPhotoWhereInput: { // input type
    AND?: NexusGenInputs['UserPhotoWhereInput'][] | null; // [UserPhotoWhereInput!]
    caption?: string | null; // String
    caption_contains?: string | null; // String
    caption_ends_with?: string | null; // String
    caption_gt?: string | null; // String
    caption_gte?: string | null; // String
    caption_in?: string[] | null; // [String!]
    caption_lt?: string | null; // String
    caption_lte?: string | null; // String
    caption_not?: string | null; // String
    caption_not_contains?: string | null; // String
    caption_not_ends_with?: string | null; // String
    caption_not_in?: string[] | null; // [String!]
    caption_not_starts_with?: string | null; // String
    caption_starts_with?: string | null; // String
    friendly_time?: string | null; // String
    friendly_time_contains?: string | null; // String
    friendly_time_ends_with?: string | null; // String
    friendly_time_gt?: string | null; // String
    friendly_time_gte?: string | null; // String
    friendly_time_in?: string[] | null; // [String!]
    friendly_time_lt?: string | null; // String
    friendly_time_lte?: string | null; // String
    friendly_time_not?: string | null; // String
    friendly_time_not_contains?: string | null; // String
    friendly_time_not_ends_with?: string | null; // String
    friendly_time_not_in?: string[] | null; // [String!]
    friendly_time_not_starts_with?: string | null; // String
    friendly_time_starts_with?: string | null; // String
    height?: number | null; // Int
    height_gt?: number | null; // Int
    height_gte?: number | null; // Int
    height_in?: number[] | null; // [Int!]
    height_lt?: number | null; // Int
    height_lte?: number | null; // Int
    height_not?: number | null; // Int
    height_not_in?: number[] | null; // [Int!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['UserPhotoWhereInput'][] | null; // [UserPhotoWhereInput!]
    OR?: NexusGenInputs['UserPhotoWhereInput'][] | null; // [UserPhotoWhereInput!]
    thumb_url?: string | null; // String
    thumb_url_contains?: string | null; // String
    thumb_url_ends_with?: string | null; // String
    thumb_url_gt?: string | null; // String
    thumb_url_gte?: string | null; // String
    thumb_url_in?: string[] | null; // [String!]
    thumb_url_lt?: string | null; // String
    thumb_url_lte?: string | null; // String
    thumb_url_not?: string | null; // String
    thumb_url_not_contains?: string | null; // String
    thumb_url_not_ends_with?: string | null; // String
    thumb_url_not_in?: string[] | null; // [String!]
    thumb_url_not_starts_with?: string | null; // String
    thumb_url_starts_with?: string | null; // String
    timestamp?: number | null; // Int
    timestamp_gt?: number | null; // Int
    timestamp_gte?: number | null; // Int
    timestamp_in?: number[] | null; // [Int!]
    timestamp_lt?: number | null; // Int
    timestamp_lte?: number | null; // Int
    timestamp_not?: number | null; // Int
    timestamp_not_in?: number[] | null; // [Int!]
    url?: string | null; // String
    url_contains?: string | null; // String
    url_ends_with?: string | null; // String
    url_gt?: string | null; // String
    url_gte?: string | null; // String
    url_in?: string[] | null; // [String!]
    url_lt?: string | null; // String
    url_lte?: string | null; // String
    url_not?: string | null; // String
    url_not_contains?: string | null; // String
    url_not_ends_with?: string | null; // String
    url_not_in?: string[] | null; // [String!]
    url_not_starts_with?: string | null; // String
    url_starts_with?: string | null; // String
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    width?: number | null; // Int
    width_gt?: number | null; // Int
    width_gte?: number | null; // Int
    width_in?: number[] | null; // [Int!]
    width_lt?: number | null; // Int
    width_lte?: number | null; // Int
    width_not?: number | null; // Int
    width_not_in?: number[] | null; // [Int!]
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    phone_number_every?: NexusGenInputs['PhoneNumberWhereInput'] | null; // PhoneNumberWhereInput
    phone_number_none?: NexusGenInputs['PhoneNumberWhereInput'] | null; // PhoneNumberWhereInput
    phone_number_some?: NexusGenInputs['PhoneNumberWhereInput'] | null; // PhoneNumberWhereInput
    photos_every?: NexusGenInputs['UserPhotoWhereInput'] | null; // UserPhotoWhereInput
    photos_none?: NexusGenInputs['UserPhotoWhereInput'] | null; // UserPhotoWhereInput
    photos_some?: NexusGenInputs['UserPhotoWhereInput'] | null; // UserPhotoWhereInput
    reviews_every?: NexusGenInputs['ReviewWhereInput'] | null; // ReviewWhereInput
    reviews_none?: NexusGenInputs['ReviewWhereInput'] | null; // ReviewWhereInput
    reviews_some?: NexusGenInputs['ReviewWhereInput'] | null; // ReviewWhereInput
    uid?: string | null; // String
    uid_contains?: string | null; // String
    uid_ends_with?: string | null; // String
    uid_gt?: string | null; // String
    uid_gte?: string | null; // String
    uid_in?: string[] | null; // [String!]
    uid_lt?: string | null; // String
    uid_lte?: string | null; // String
    uid_not?: string | null; // String
    uid_not_contains?: string | null; // String
    uid_not_ends_with?: string | null; // String
    uid_not_in?: string[] | null; // [String!]
    uid_not_starts_with?: string | null; // String
    uid_starts_with?: string | null; // String
    user_type?: NexusGenEnums['UserType'] | null; // UserType
    user_type_in?: NexusGenEnums['UserType'][] | null; // [UserType!]
    user_type_not?: NexusGenEnums['UserType'] | null; // UserType
    user_type_not_in?: NexusGenEnums['UserType'][] | null; // [UserType!]
  }
}

export interface NexusGenEnums {
  PhoneNumberOrderByInput: "code_ASC" | "code_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "phone_ASC" | "phone_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  ProductPhotoOrderByInput: "caption_ASC" | "caption_DESC" | "createdAt_ASC" | "createdAt_DESC" | "friendly_time_ASC" | "friendly_time_DESC" | "height_ASC" | "height_DESC" | "id_ASC" | "id_DESC" | "thumb_url_ASC" | "thumb_url_DESC" | "timestamp_ASC" | "timestamp_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "url_ASC" | "url_DESC" | "width_ASC" | "width_DESC"
  ReviewOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "rating_ASC" | "rating_DESC" | "review_text_ASC" | "review_text_DESC" | "review_time_friendly_ASC" | "review_time_friendly_DESC" | "timestamp_ASC" | "timestamp_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  UserPhotoOrderByInput: "caption_ASC" | "caption_DESC" | "createdAt_ASC" | "createdAt_DESC" | "friendly_time_ASC" | "friendly_time_DESC" | "height_ASC" | "height_DESC" | "id_ASC" | "id_DESC" | "thumb_url_ASC" | "thumb_url_DESC" | "timestamp_ASC" | "timestamp_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "url_ASC" | "url_DESC" | "width_ASC" | "width_DESC"
  UserType: "ADMIN" | "CONSUMER" | "SELLER"
}

export interface NexusGenRootTypes {
  AuthPayload: { // root type
    token?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: {};
  PhoneNumber: { // root type
    code: string; // String!
    id: string; // ID!
    phone: string; // String!
  }
  Product: { // root type
    deeplink?: string | null; // String
    featured_image: string; // String!
    has_online_delivery: boolean; // Boolean!
    id: string; // ID!
    is_delivering_now: boolean; // Boolean!
    name: string; // String!
    photo_count: number; // Int!
    photos_url: string; // String!
    thumb: string; // String!
    url: string; // String!
  }
  ProductPhoto: { // root type
    caption: string; // String!
    friendly_time: string; // String!
    height: number; // Int!
    id: string; // ID!
    thumb_url: string; // String!
    timestamp: number; // Int!
    url: string; // String!
    width: number; // Int!
  }
  ProductRating: { // root type
    aggregate_rating: number; // Float!
    id: string; // ID!
    votes: number; // Int!
  }
  Query: {};
  Review: { // root type
    id: string; // ID!
    rating: number; // Int!
    review_text: string; // String!
    review_time_friendly: string; // String!
    timestamp: number; // Int!
  }
  User: { // root type
    email?: string | null; // String
    id: string; // ID!
    name?: string | null; // String
    uid: string; // String!
    user_type: NexusGenEnums['UserType']; // UserType!
  }
  UserPhoto: { // root type
    caption: string; // String!
    friendly_time: string; // String!
    height: number; // Int!
    id: string; // ID!
    thumb_url: string; // String!
    timestamp: number; // Int!
    url: string; // String!
    width: number; // Int!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  PhoneNumberWhereInput: NexusGenInputs['PhoneNumberWhereInput'];
  ProductPhotoWhereInput: NexusGenInputs['ProductPhotoWhereInput'];
  ProductRatingWhereInput: NexusGenInputs['ProductRatingWhereInput'];
  ProductWhereInput: NexusGenInputs['ProductWhereInput'];
  ReviewWhereInput: NexusGenInputs['ReviewWhereInput'];
  UserPhotoWhereInput: NexusGenInputs['UserPhotoWhereInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  PhoneNumberOrderByInput: NexusGenEnums['PhoneNumberOrderByInput'];
  ProductPhotoOrderByInput: NexusGenEnums['ProductPhotoOrderByInput'];
  ReviewOrderByInput: NexusGenEnums['ReviewOrderByInput'];
  UserPhotoOrderByInput: NexusGenEnums['UserPhotoOrderByInput'];
  UserType: NexusGenEnums['UserType'];
}

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: { // field return type
    login: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    signup: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
  }
  PhoneNumber: { // field return type
    code: string; // String!
    id: string; // ID!
    phone: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Product: { // field return type
    all_reviews: NexusGenRootTypes['Review'][] | null; // [Review!]
    deeplink: string | null; // String
    featured_image: string; // String!
    has_online_delivery: boolean; // Boolean!
    id: string; // ID!
    is_delivering_now: boolean; // Boolean!
    name: string; // String!
    photo_count: number; // Int!
    photos: NexusGenRootTypes['ProductPhoto'][] | null; // [ProductPhoto!]
    photos_url: string; // String!
    thumb: string; // String!
    url: string; // String!
    user_rating: NexusGenRootTypes['ProductRating']; // ProductRating!
  }
  ProductPhoto: { // field return type
    caption: string; // String!
    friendly_time: string; // String!
    height: number; // Int!
    id: string; // ID!
    product: NexusGenRootTypes['Product']; // Product!
    thumb_url: string; // String!
    timestamp: number; // Int!
    url: string; // String!
    width: number; // Int!
  }
  ProductRating: { // field return type
    aggregate_rating: number; // Float!
    id: string; // ID!
    votes: number; // Int!
  }
  Query: { // field return type
    me: NexusGenRootTypes['User'] | null; // User
  }
  Review: { // field return type
    id: string; // ID!
    product: NexusGenRootTypes['Product']; // Product!
    rating: number; // Int!
    review_text: string; // String!
    review_time_friendly: string; // String!
    timestamp: number; // Int!
    user: NexusGenRootTypes['User']; // User!
  }
  User: { // field return type
    email: string | null; // String
    id: string; // ID!
    name: string | null; // String
    phone_number: NexusGenRootTypes['PhoneNumber'][] | null; // [PhoneNumber!]
    photos: NexusGenRootTypes['UserPhoto'][] | null; // [UserPhoto!]
    reviews: NexusGenRootTypes['Review'][] | null; // [Review!]
    uid: string; // String!
    user_type: NexusGenEnums['UserType']; // UserType!
  }
  UserPhoto: { // field return type
    caption: string; // String!
    friendly_time: string; // String!
    height: number; // Int!
    id: string; // ID!
    thumb_url: string; // String!
    timestamp: number; // Int!
    url: string; // String!
    user: NexusGenRootTypes['User']; // User!
    width: number; // Int!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    login: { // args
      idToken?: string | null; // String
    }
    signup: { // args
      idToken?: string | null; // String
    }
  }
  Product: {
    all_reviews: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ReviewOrderByInput'] | null; // ReviewOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ReviewWhereInput'] | null; // ReviewWhereInput
    }
    photos: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ProductPhotoOrderByInput'] | null; // ProductPhotoOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ProductPhotoWhereInput'] | null; // ProductPhotoWhereInput
    }
  }
  User: {
    phone_number: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['PhoneNumberOrderByInput'] | null; // PhoneNumberOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PhoneNumberWhereInput'] | null; // PhoneNumberWhereInput
    }
    photos: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserPhotoOrderByInput'] | null; // UserPhotoOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserPhotoWhereInput'] | null; // UserPhotoWhereInput
    }
    reviews: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ReviewOrderByInput'] | null; // ReviewOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ReviewWhereInput'] | null; // ReviewWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AuthPayload" | "Mutation" | "PhoneNumber" | "Product" | "ProductPhoto" | "ProductRating" | "Query" | "Review" | "User" | "UserPhoto";

export type NexusGenInputNames = "PhoneNumberWhereInput" | "ProductPhotoWhereInput" | "ProductRatingWhereInput" | "ProductWhereInput" | "ReviewWhereInput" | "UserPhotoWhereInput" | "UserWhereInput";

export type NexusGenEnumNames = "PhoneNumberOrderByInput" | "ProductPhotoOrderByInput" | "ReviewOrderByInput" | "UserPhotoOrderByInput" | "UserType";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}