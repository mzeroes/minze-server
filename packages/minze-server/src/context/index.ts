import { ModuleContext } from '@graphql-modules/core';
import * as jwt from 'jsonwebtoken';
import config from '../config';

interface Context {
  request: any;
}

export function getUserId(context: Context) {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const {userId} = jwt.verify(token, config.ENV_VARS.APP_SECRET) as {
      userId: string;
    };
    return userId;
  }

  throw new AuthError();
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}

export type MyContext = ModuleContext;
