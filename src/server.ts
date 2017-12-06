import { NestFactory } from '@nestjs/core';
import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';
import { ApplicationModule } from './modules/app.module';
import { config } from '../config/config';
import { NestMongooseModel } from 'nest-mongoose';

async function bootstrap() {
    try {
        mongoose.Promise = bluebird;
        await mongoose.connect(config.database, { useMongoClient: true });
        NestMongooseModel.connection = mongoose.connection;
        const app = await NestFactory.create(ApplicationModule);
        await app.listen(config.port);
    } catch (err) {
        console.log(err);
    }
}

bootstrap();
