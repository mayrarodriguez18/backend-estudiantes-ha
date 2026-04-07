import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './modules/estudiantes/estudiantes.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { Sexo } from './modules/estudiantes/entities/sexo.entity';
import { Etnia } from './modules/estudiantes/entities/etnia.entity';



@Module({
  imports: [
ConfigModule.forRoot({
  isGlobal: true,
}),    
  EstudiantesModule,
  DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
