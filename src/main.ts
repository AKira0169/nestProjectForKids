import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MessagesModule);

  await app.listen(3000);
}
bootstrap();
