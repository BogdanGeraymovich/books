import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';
import { config } from '../config/config';
import { NestMongooseModel } from 'nest-mongoose';

export async function database() {
    mongoose.Promise = bluebird;
    await mongoose.connect(config.database, { useMongoClient: true });
    NestMongooseModel.connection = mongoose.connection;
}
