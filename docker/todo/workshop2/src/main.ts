import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import config from "./config/config";

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const appConfig = config().app;
  const port = appConfig.port;
  const appEnv = appConfig.appEnv;

  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  if (appEnv == "prod"){
    logger.log(`Running in production mode`);
  }

  logger.log(`Starting Docker session service listening at port ${port}`);
}
bootstrap();
