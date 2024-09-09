import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsEntity } from './products.entity'; // Importa la entidad

@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity])], // Importa la entidad aquí
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
