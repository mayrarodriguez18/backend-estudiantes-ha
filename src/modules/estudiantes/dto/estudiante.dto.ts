import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEstudianteDto {

  @IsString()
  @IsNotEmpty()
  nombres!: string;

  @IsString()
  @IsNotEmpty()
  paterno!: string;

  @IsString()
  @IsOptional()
  materno?: string;

  @IsString()
  @IsNotEmpty()
  direccion!: string;
}