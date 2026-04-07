import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Etnia } from './etnia.entity';
import { Sexo } from './sexo.entity';

@Entity({schema:'estudiantes', name: 'estudiante'}
)
export class Estudiante {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ type: 'varchar', nullable: false, length: 60 })
  nombres: string;

  @Column({ type: 'varchar', nullable: false, length: 30 })
  paterno: string;

  @Column({ type: 'varchar', nullable: true, length: 30 })
  materno: string;

  @Column({ type: 'varchar', nullable: true, length: 200 })
  direccion: string;

  @Column({ type: 'int4', nullable: false })
  sexo_id: number;

  @Column({ type: 'int4', nullable: false })
  etnia_id: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

    @ManyToOne(() => Sexo, { nullable: false, eager: true })
  @JoinColumn({ name: 'sexo_id' })
  sexo: Sexo;

  @ManyToOne(() => Etnia, { nullable: false, eager: true })
  @JoinColumn({ name: 'etnia_id' })
  etnia: Etnia;
}

