import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { Product } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @HttpCode(201)
  async createProduct(@Body() req: Product) {
    return await this.productService.createProduct(req);
  }

  @Get()
  @HttpCode(200)
  async getProducts() {
    return await this.productService.getProducts();
  }
}
