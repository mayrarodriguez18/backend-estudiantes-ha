import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { Estudiante } from '../entities/estudiante.entity';
import { CreateEstudianteDto } from '../dto/estudiante.dto'; 

@Injectable()
export class EstudiantesService {
  private readonly repository: Repository<Estudiante>;

  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
  ) {
    // Definimos el repositorio una sola vez para no repetir código
    this.repository = this.dataSource.getRepository(Estudiante);
  }

  async getAll() {
    // Usamos el QueryBuilder para asegurar que los JOINS usen el esquema 'estudiantes'
    return await this.repository
      .createQueryBuilder('estudiante')
      .orderBy('estudiante.id', 'ASC') // Ordenamos por ID para que la lista no salte
      .getMany();
  }

  async getOne(id: number) {
    const estudiante = await this.repository
      .createQueryBuilder('estudiante')
      .where('estudiante.id = :id', { id })
      .getOne();

    if (!estudiante) {
      throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
    }
    return estudiante;
  }

  async create(createEstudianteDto: CreateEstudianteDto) {
    // Creamos la instancia mapeando los IDs a objetos de relación
    const nuevoEstudiante = this.repository.create({
      nombres: createEstudianteDto.nombres,
      paterno: createEstudianteDto.paterno,
      materno: createEstudianteDto.materno,
      direccion: createEstudianteDto.direccion,
    });

    return await this.repository.save(nuevoEstudiante);
  }

  async update(id: number, dto: CreateEstudianteDto) {
    // Primero verificamos que exista
    const estudiante = await this.getOne(id);

    // Actualizamos los campos
    const estudianteActualizado = this.repository.merge(estudiante, {
      nombres: dto.nombres,
      paterno: dto.paterno,
      materno: dto.materno,
      direccion: dto.direccion,
    });

    return await this.repository.save(estudianteActualizado);
  }

  async remove(id: number) {
    const result = await this.repository.delete(id);
    
    if (result.affected === 0) {
      throw new NotFoundException(`No se pudo eliminar: Estudiante #${id} no existe`);
    }

    return { deleted: true, message: `El estudiante #${id} ha sido eliminado` };
  }
}