import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async createProduct(data: Product) {
    return this.productRepository.save(data);
  }

  async getProducts() {
    return this.productRepository.getAll();
  }
}
