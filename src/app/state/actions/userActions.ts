import { User } from '../models/interfaces';

export class SetUser {
  static readonly type = '[USER] set';
  constructor(public payload: User) { }
}

export class SetDarkmode {
  static readonly type = '[USER] setdarkmode';
  constructor(public payload: boolean) { }
}


