import { Controller, Post, Delete, Put, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // add product
  @Post('/add-product')
  addProduct(): string {
    return 'This will add product';
  }
  // update
  @Put('/update-product')
  updateProduct(): string {
    return 'This will update product';
  }
  // find
  @Get('search-product')
  findAllProducts(): string {
    return 'This will find product';
  }
  //dynamic param
  @Get('/search-product/:ProductId')
  findAllProductsById(@Param() params: any): string {
    return `This product name is ${params.ProductId}`;
  }
  // delete product
  @Delete('/delete-product')
  deleteProduct(): string {
    return 'This will delete product';
  }
}
