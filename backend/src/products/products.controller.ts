import { Controller, Get } from '@nestjs/common';
import { Products } from './products';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get('list')
  async findAll(): Promise<Products[]> {
    return this.productsService.findAll();
  }
}
