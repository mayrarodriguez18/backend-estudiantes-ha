import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'estudiantes', name: 'estudiante' })
export class Estudiante {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  nombres: string;

  @Column({ type: 'varchar', length: 30 })
  paterno: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  materno?: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  direccion?: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}