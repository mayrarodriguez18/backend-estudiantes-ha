useFactory: (configService: ConfigService) => {
  console.log('HOST:', configService.get('HOST'));
  console.log('PORT_DB:', configService.get('PORT_DB'));
  console.log('USERNAME_DB:', configService.get('USERNAME_DB'));
  console.log('PASSWORD_DB:', configService.get('PASSWORD_DB'));
  console.log('DATABASE:', configService.get('DATABASE'));

  return {
    type: 'postgres',
    host: configService.get('HOST'),
    port: +configService.get('PORT_DB'),
    username: configService.get('USERNAME_DB'),
    password: configService.get('PASSWORD_DB'),
    database: configService.get('DATABASE'),
    entities: [],
    autoLoadEntities: true,
    synchronize: false,
  };
}