import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@store/models/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product') product!: Product
  constructor() { }

  ngOnInit(): void { }

}
