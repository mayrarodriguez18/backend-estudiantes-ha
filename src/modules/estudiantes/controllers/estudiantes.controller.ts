
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EstudiantesService } from '../services/estudiantes.service';
import { CreateEstudianteDto } from '../dto/estudiante.dto';

@Controller()
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @MessagePattern({ cmd: 'create_student' }) 
  create(@Payload() data: any) {
    return this.estudiantesService.create(data);
  }

  @MessagePattern({ cmd: 'get_all_student' })
  findAll() {
  return this.estudiantesService.getAll();
  }

  @MessagePattern({ cmd: 'get_one_student' })
  findOne(@Payload() data: { id: number }) {
   return this.estudiantesService.getOne(data.id);
  }

  @MessagePattern({ cmd: 'update_student' })
  update(@Payload() data: any) {
    const { id, ...dto } = data;
    return this.estudiantesService.update(id, dto);
  }

  @MessagePattern({ cmd: 'remove_student' })
  remove(@Payload() data: { id: number }) {
    return this.estudiantesService.remove(data.id);
  }
  
  @MessagePattern('crear_estudiante')
  crearEstudiante(@Payload() data: CreateEstudianteDto) {
  return this.estudiantesService.create(data);
}
}