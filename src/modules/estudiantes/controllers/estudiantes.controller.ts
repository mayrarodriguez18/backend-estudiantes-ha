import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { EstudiantesService } from '../services/estudiantes.service';
import { CreateEstudianteDto } from '../dto/estudiante.dto';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudianteService: EstudiantesService) {}

  @Get()
  getAll() {
    return this.estudianteService.getAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.estudianteService.getOne(id);
  }

  @Post()
  async create(@Body() estudianteDto: CreateEstudianteDto) {
    const estudiante = await this.estudianteService.create(estudianteDto);

    const datos = {
      data: estudiante,
      message: 'Registro agregado con exito',
    };

    return datos;
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() estudianteDto: CreateEstudianteDto,
  ) {
    const estudiante = await this.estudianteService.update(id, estudianteDto);

    const datos = {
      data: estudiante,
      message: 'Registro actualizado con exito',
    };

    return datos;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.estudianteService.remove(id);

    const datos = {
      message: 'Registro eliminado con exito',
    };

    return datos;
  }
}