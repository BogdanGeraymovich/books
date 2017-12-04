import { Component } from '@nestjs/common';
import * as uuid from 'uuid';
import { Schema, Types } from 'mongoose';
import { NestMongooseModel } from 'nest-mongoose';
import { BookDocument } from '../documents/book.document';

@Component()
export class BookModel extends NestMongooseModel<BookDocument> {

    constructor() {
        super('book');
    }

    protected defineSchema(): Schema {
        return new Schema({
            _id: {
                type: String,
                default: uuid.v4(),
            },
            title: {
                type: String,
            },
            rate: {
                type: Number,
            },
        });
    }

}