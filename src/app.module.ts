import { Module } from '@nestjs/common';
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    ProductModule
  ]
})
export class AppModule {}
