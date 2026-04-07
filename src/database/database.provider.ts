import { DynamicModule } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

export const DatabaseProvider: DynamicModule = 
TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
 
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get('HOST'),
    port: +configService.get('PORT_DB'),
    username: configService.get('USERNAME_DB'),
    password: configService.get('PASSWORD_DATABASE'),
    database: configService.get('DATABASE'),
    entities: [],
    autoLoadEntities: configService.get('AUTOLOADENTITIES'),
    synchronize: false,
  }),
 
  
});

