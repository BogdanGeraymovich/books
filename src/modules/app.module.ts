import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';

@Module({
    modules: [BooksModule],
})
export class ApplicationModule {}