import { verify } from 'jsonwebtoken';
import { Context } from './types';

export const APP_SECRET = process.env.APP_SECRET || 'valahrsimsim';

interface Token {
  userId: string;
}

export function getUserId(context: Context) {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const verifiedToken = verify(token, APP_SECRET) as Token;
    return verifiedToken && verifiedToken.userId;
  }
}