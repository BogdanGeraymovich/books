import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const swaggerOptions = new DocumentBuilder()
    .setTitle('Books api')
    .setDescription('API for books')
    .setVersion('1.0')
    .addTag('books')
    .build();

export function swagger(app) {
    const document = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup('/api-doc', app, document);
}
