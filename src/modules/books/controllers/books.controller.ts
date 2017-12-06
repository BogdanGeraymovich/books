import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { BooksService } from '../services/books.service';
import { ApiUseTags } from '@nestjs/swagger';
import { Book } from '../interfaces/books.interface';
import { CreateBookDto } from '../dto/createBook.dto';
import { GetBookDto } from '../dto/getBook.dto';

@Controller('books')
@ApiUseTags('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    @ApiResponse({ status: 201, description: 'Book created'})
    async create(@Body() book: CreateBookDto) {
        try {
            return await this.booksService.create(book);
        } catch (error) {
            return error;
        }
    }

    @Get()
    @ApiResponse({ status: 200, description: 'Books list'})
    async findAll(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @Get('/:id')
    @ApiResponse({ status: 200, description: 'Book by id'})
    async findById(@Param() param: GetBookDto): Promise<Book> {
        return this.booksService.findById(param.id);
    }

    @Patch('/:id/rate')
    @ApiResponse({ status: 200, description: 'Rated book'})
    async rate(@Param() param: GetBookDto): Promise<Book> {
        return this.booksService.rate(param.id);
    }
}