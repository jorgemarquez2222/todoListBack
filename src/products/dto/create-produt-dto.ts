import { IsBoolean, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProdutDto {
  @IsNumber()
  id_producto: number;

  @IsString()
  nombre: string;

  @IsNumber()
  id_categoria: number;

  @IsString()
  codigo_barras: string;

  @IsNumber()
  @IsPositive()
  precio_venta: number;

  @IsNumber()
  cantidad_stock: number;

  @IsBoolean()
  estado: boolean;
}
