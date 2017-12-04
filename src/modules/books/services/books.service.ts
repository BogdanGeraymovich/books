import { Component, Inject } from '@nestjs/common';
import { BookRepository } from '../repositories/book.repository';
import { Book } from '../interfaces/books.interface';

@Component()
export class BooksService {
    private bookRepository;

    constructor(@Inject('BookRepository') bookRepository: BookRepository) {
        this.bookRepository = bookRepository;
    }

    create(book: Book) {
        return this.bookRepository.create(book);
    }

    findAll(): Promise<Book[]> {
        return this.bookRepository.findAll();
    }

    findById(id: string): Promise<Book> {
        return this.bookRepository.findById(id);
    }

    rate(id: string): Promise<Book> {
        return this.bookRepository.rate(id);
    }
}