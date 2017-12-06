import { NestFactory } from '@nestjs/core';
import { database } from './database';
import { swagger } from './swagger';
import { ApplicationModule } from './modules/app.module';
import { config } from '../config/config';

async function bootstrap() {
    try {
        await database();
        const app = await NestFactory.create(ApplicationModule);
        swagger(app);
        await app.listen(config.port);
    } catch (err) {
        console.log(err);
    }
}

bootstrap();
