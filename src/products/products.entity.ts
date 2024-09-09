import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productos')
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id_producto: number;

  @Column({ nullable: true })
  nombre: string;

  @Column()
  id_categoria: number;

  @Column({ nullable: true })
  codigo_barras: string;

  @Column({ nullable: true })
  precio_venta: number;

  @Column()
  cantidad_stock: number;

  @Column({ default: true })
  estado: boolean;
}
