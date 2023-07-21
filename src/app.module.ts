import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './database/ormconfig';
import { PokemonModule } from './pokemon/pokemon.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    PokemonModule,
    CacheModule.register(),
    TypeOrmModule.forRoot({ ...config }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  controllers: [AppController],
})
export class AppModule {}
