import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from '@store/models/interfaces';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Observable<Product[]>

  constructor(private store: Store) {
    this.products = this.store.select(state => state.product.products)
  }

  ngOnInit(): void {
  }

}
