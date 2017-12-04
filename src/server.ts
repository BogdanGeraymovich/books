import { NestFactory } from '@nestjs/core';
import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';
import { ApplicationModule } from './modules/app.module';
import { config } from '../config/config';
import { NestMongooseModel } from 'nest-mongoose';

mongoose.connect(config.database, { useMongoClient: true });
mongoose.Promise = bluebird;
NestMongooseModel.connection = mongoose.connection;

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	await app.listen(config.port);
}

bootstrap();
