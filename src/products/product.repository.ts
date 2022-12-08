import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];

  async save(product: Product) {
    this.products.push(product)
    return product;
  }

  async getAll() {
    return this.products;
  }
}
