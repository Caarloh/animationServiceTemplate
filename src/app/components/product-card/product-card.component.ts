import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../data-structure/interfaces';

@Component({
  selector: 'products-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit{
  @Input() onStart!: boolean;
  @Input() data!: Product;

  formatedPrice!: string;

  ngOnInit(): void {
    this.formatedPrice = this.data.PRICE.toLocaleString();
  }

}
