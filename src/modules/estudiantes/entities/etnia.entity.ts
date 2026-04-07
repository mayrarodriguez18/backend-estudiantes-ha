import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('estudiantes.etnia')
export class Etnia {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ type: 'varchar', length: 80, nullable: false })
  nombre: string;
}
