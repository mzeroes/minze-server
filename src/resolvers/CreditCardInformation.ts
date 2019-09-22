import { CreditCardInformationResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';
import { PaymentAccountParent } from './PaymentAccount';

export interface CreditCardInformationParent {
  cardNumber: string;
  country: string;
  createdAt: string;
  expiresOnMonth: number;
  expiresOnYear: number;
  firstName: string;
  id: string;
  lastName: string;
  postalCode: string;
  securityCode: string;
}

export const CreditCardInformation: CreditCardInformationResolvers.Type<TypeMap> = {
  cardNumber: parent => parent.cardNumber,
  country: parent => parent.country,
  createdAt: parent => parent.createdAt,
  expiresOnMonth: parent => parent.expiresOnMonth,
  expiresOnYear: parent => parent.expiresOnYear,
  firstName: parent => parent.firstName,
  id: parent => parent.id,
  lastName: parent => parent.lastName,
  postalCode: parent => parent.postalCode,
  securityCode: parent => parent.securityCode
};
