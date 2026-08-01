import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable cookie parser
  app.use(cookieParser());

  // Configure CORS to support frontend communication with credentials
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      // Regex matching localhost, 127.0.0.1, or local IP ranges (192.168.x.x, 10.x.x.x, 172.16-31.x.x)
      const isLocalOrPrivateIp = /^http:\/\/(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+)(:\d+)?$/.test(origin);

      if (isLocalOrPrivateIp) {
        callback(null, true);
      } else {
        callback(null, true);
      }
    },
    credentials: true,
  });

  // Apply validation pipes globally for DTO rules
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // Enable Swagger Documentation
  const config = new DocumentBuilder()
    .setTitle('AWS Community Day Event Management API')
    .setDescription(
      'Complete API specification for the AWS Community Day Event Management System, detailing participant registration, QR generation, secure check-in, goodies claiming, and administrator dashboard analytics.',
    )
    .setVersion('1.0')
    .addCookieAuth('token', {
      type: 'apiKey',
      in: 'cookie',
      name: 'token',
      description: 'Organizer authorization JWT cookie',
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT || 5000;
  console.log(`[Bootstrap] Server starting on port ${port}...`);
  console.log(`[Bootstrap] Swagger API Docs will be available at http://localhost:${port}/docs`);
  await app.listen(port, "0.0.0.0");

console.log(`[Bootstrap] Server running at http://0.0.0.0:${port}`);
}
bootstrap();
