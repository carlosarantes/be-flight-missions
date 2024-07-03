import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const options = new DocumentBuilder()
      .setTitle("Flight Missions")
      .setDescription("Demo purpose")
      .setVersion("1.0")
      .setContact("Carlos Arantes", "", "carlosaugusto.a@outlook.com")
      .build()

  const swagger = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('doc', app, swagger)

  await app.listen(3000);
}
bootstrap();
