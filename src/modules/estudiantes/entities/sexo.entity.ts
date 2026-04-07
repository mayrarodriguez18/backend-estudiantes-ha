
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('estudiantes.sexo')
export class Sexo {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ type: 'varchar', length: 80, nullable: false })
  nombre: string;
}