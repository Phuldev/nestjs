import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [UsersModule],
  controllers: [ProductsController],
  providers: [],
  exports:[],
})
export class RootModule {
  constructor(){
    console.log('This is a message from the app Phuldev');
  }
}
