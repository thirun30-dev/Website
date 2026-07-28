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

      const allowedOrigins = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://192.168.56.1:3000",
        "http://192.168.1.7:3000",
      ];

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
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
