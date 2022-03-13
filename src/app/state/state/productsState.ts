import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Product } from '../models/interfaces';
import { SetProducts } from '../actions/productActions';
import { Injectable } from '@angular/core';

export class ProductStateModel {
    products!: Product[];
    cart!: Product[];
}

@State<ProductStateModel>({
    name: 'product',
    defaults: {
        products: [
            {
                id: 'product-one-xxx',
                name: 'Product',
                price: 20,
                image: 'assets/product.png'
            },
            {
                id: 'product-two-xxx',
                name: 'Lego',
                price: 22,
                image: 'assets/product.png'
            },
            {
                id: 'product-three-xxx',
                name: 'Product',
                price: 20,
                image: 'assets/product.png'
            },
            {
                id: 'product-four-xxx',
                name: 'Lego',
                price: 22,
                image: 'assets/product.png'
            },
            {
                id: 'product-five-xxx',
                name: 'Product',
                price: 20,
                image: 'assets/product.png'
            },
            {
                id: 'product-six-xxx',
                name: 'Lego',
                price: 22,
                image: 'assets/product.png'
            }
        ],
        cart: []
    }
})
@Injectable()
export class ProductState {

    @Action(SetProducts)
    setProducts({ getState, patchState }: StateContext<ProductStateModel>, { payload }: SetProducts) {
        const state = getState().products;
        patchState({
            products: [...state, ...payload]
        })
    }

}
