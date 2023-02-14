import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('list')
  getList() {
    return [{ id: 1, name: 'sample' }];
  }
}
