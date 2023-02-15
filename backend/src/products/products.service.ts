import { Injectable } from '@nestjs/common';
import { Products } from './products';

@Injectable()
export class ProductsService {
  private products: Products[] = [];

  findAll(): Products[] {
    return this.products;
  }
}
