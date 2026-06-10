import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const logger = new Logger('main');
  
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
         host: '0.0.0.0',
        port:Number(process.env.PORT) ,
        
      },
    },
  );

app.useGlobalPipes(new ValidationPipe({
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true, 
}));
  
  

  await app.listen();
  Logger.log(`Microservicio de estudiantes corriendo en el puerto ${process.env.PORT}`);

}
bootstrap();
