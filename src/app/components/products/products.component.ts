import { Component, OnInit } from '@angular/core';
import { Product } from '../../data-structure/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  products: Product[] =
  [{INFO: "Primer elemento de la lista", PRICE:9999999},
  {INFO: "Segundo elemento de la lista", PRICE:10000000},
  {INFO: "Tercer elemento de la lista", PRICE:51293819},
  {INFO: "Cuarto elemento de la lista", PRICE:546456},
  {INFO: "Quinto elemento de la lista", PRICE:123123123}
];

  ngOnInit(): void {
  }

  isEven(n: number):boolean{
    if((n % 2) === 0)
      return true;
    return false;
  }
}
