import { Product } from '../models/interfaces';

export class SetProducts {
    static readonly type = '[Product] set';
    constructor(public payload: Product[]) { }
}


