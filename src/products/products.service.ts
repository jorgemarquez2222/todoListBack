import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from './products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private productRepository: Repository<ProductsEntity>,
  ) {}

  findAll(): Promise<ProductsEntity[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<ProductsEntity | null> {
    return this.productRepository.findOneBy({ id_producto: id });
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
