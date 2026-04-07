import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateEstudianteDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsNotEmpty()
  nombres: string;

  @IsString()
  @IsNotEmpty()
  paterno: string;

  @IsString()
  @IsOptional()
  materno: string;


  @IsNumber()
  @IsNotEmpty()
  sexo_id: number;

  @IsString()
  @IsOptional()
  direccion: string;

  @IsNumber()
  @IsNotEmpty()
  etnia_id: number;

  @IsDate()
  @IsOptional()
  create_at: Date;
  //creo que aqui es el clavo, el nombre en la base de datos dice create_at, vamos a probar

  @IsDate()
  @IsOptional()
  updated: Date;
}