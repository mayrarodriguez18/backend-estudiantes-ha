import { Module } from '@nestjs/common';
import { EstudiantesController } from './controllers/estudiantes.controller';
import { EstudiantesService } from './services/estudiantes.service';
import { Estudiante } from './entities/estudiante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sexo } from './entities/sexo.entity';
import { Etnia } from './entities/etnia.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Estudiante, Etnia, Sexo])],
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
  exports: [EstudiantesModule,TypeOrmModule],
})
export class EstudiantesModule {}
