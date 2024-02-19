import { Component } from '@angular/core';
import { Product } from './product.model';
import { ArrayWrapper } from './wrapper.model';



@Component({
  selector: 'app-root',
  template: `
    <h2>Products</h2>
    <ul>
      <li *ngFor="let product of products.getItems()">
        {{ product.id }} - {{ product.name }} - {{ product.price | currency }}
      </li>
    </ul>
  `
})
export class AppComponent {
  products: ArrayWrapper<Product>;

  constructor() {
    this.products = new ArrayWrapper<Product>();
    this.loadProducts();
  }

  loadProducts(): void {
    // Load products from API or any other data source
    const product1 = new Product(1, 'Product 1', 10.99);
    const product2 = new Product(2, 'Product 2', 19.99);
    this.products.addItem(product1);
    this.products.addItem(product2);
  }
}
