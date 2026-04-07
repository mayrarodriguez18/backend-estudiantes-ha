import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from '../entities/estudiante.entity';
import { Repository } from 'typeorm';
import { CreateEstudianteDto } from '../dto/estudiante.dto';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepo: Repository<Estudiante>,
  ) {}

  getAll() {
    return `Endpoint para getAll`;
  }

  getOne(id: number) {
    return `Esto retorna el id ${id}`;
  }

  async create(estudianteDto: CreateEstudianteDto) {
    try {
      const estudiante = this.estudianteRepo.create(estudianteDto);

      return await this.estudianteRepo.save(estudiante);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, estudianteDto: CreateEstudianteDto) {
    try {
      const estudiante = await this.estudianteRepo.preload({
        id,
        ...estudianteDto,
      });
      if (!estudiante) {
        throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
      }
      return await this.estudianteRepo.save(estudiante);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      const result = await this.estudianteRepo.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
      }
      return { message: `Estudiante con ID ${id} eliminado` };
    } catch (error) {
      console.log(error);
    }
  }
}