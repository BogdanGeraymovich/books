import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Book } from '../interfaces/books.interface';
import { BookDocument } from '../documents/book.document';
import { BookModel } from '../models/book.model';

@Component()
export class BookRepository {
    private readonly book: Model<BookDocument>;

    constructor(@Inject('BookModel') bookModel: BookModel) {
        this.book = bookModel.mongooseModel;
    }

    public findAll(): Promise<Array<Book>> {
        return this.book.find()
            .lean()
            .exec();
    }

    public findById(id: string): Promise<Book> {
        return this.book.findOne({ _id: id })
            .lean()
            .exec();
    }

    public async rate(id: string): Promise<Book> {
        const bookData = await this.book.findOne({ _id: id });
        bookData.rate = bookData.rate + 1;

        return bookData.save();
    }

    public create(bookData: Book): Promise<Book> {
        return this.book.create(bookData);
    }
}