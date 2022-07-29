import { join } from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema // Configuration service is needed ot user this module
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      renderPath: '/',
      exclude: ['/api*'],
      }),
      MongooseModule.forRoot(process.env.MONGODB_URI),


    PokemonModule,


    CommonModule,


    SeedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
