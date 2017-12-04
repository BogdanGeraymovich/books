import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books.controller';
import { BooksService } from './services/books.service';
import { BookRepository } from './repositories/book.repository';
import { BookModel } from './models/book.model';

@Module({
    controllers: [BooksController],
    components: [
        BooksService,
        BookRepository,
        BookModel,
    ],
})
export class BooksModule {}