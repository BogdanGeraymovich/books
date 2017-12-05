import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { BooksService } from '../services/books.service';
import { Book } from '../interfaces/books.interface';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    async create(@Body() book: Book) {
        return this.booksService.create(book);
    }

    @Get()
    async findAll(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @Get('/:id')
    async findById(@Param() param): Promise<Book> {
        return this.booksService.findById(param.id);
    }

    @Patch('/:id/rate')
    async rate(@Param() param): Promise<Book> {
        return this.booksService.rate(param.id);
    }
}