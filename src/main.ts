import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Solo deja los campos definidos en la DTO
      transform: true, //Transforma los tipos de datos a los especificados en la DTO
      forbidNonWhitelisted: true, //Si un campo no es permitido, lanza un error
    }),
  );
  await app.listen(3000);
}
main();
