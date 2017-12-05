import { BookRepository } from '../../../modules/books/repositories/book.repository';
import { BooksService } from '../../../modules/books/services/books.service';

const booksArray = [{
    _id: 'af0775ca-73f2-4c83-8e30-39400be1ea8a',
    title: 'Book 1',
    rate: 1,
}, {
    _id: 'af0775ca-73f3-4c83-8e30-39400be1eg8a',
    title: 'Book 2',
    rate: 1,
}];

describe('BooksService', () => {
    let booksService: BooksService;
    let bookRepository: BookRepository;

    beforeEach(async () => {
        bookRepository = {
            findAll: jest.fn().mockImplementation(() => booksArray),
            create: jest.fn().mockImplementation(() => booksArray[0]),
            findById: jest.fn().mockImplementation(() => booksArray[0]),
            rate: jest.fn().mockImplementation(() => booksArray[0]),
        };
        booksService = new BooksService(bookRepository);
    });

    describe('create', () => {
        it('return created book', async () => {
            expect(await booksService.create()).toBe(booksArray[0]);
        });
    });

    describe('findAll', () => {
        it('get array of books', async () => {
            expect(await booksService.findAll()).toBe(booksArray);
        });
    });

    describe('findById', () => {
        it('get book by id', async () => {
            expect(await booksService.findById(booksArray[0]._id)).toBe(booksArray[0]);
        });
    });

    describe('rate', () => {
        it('rate book by id', async () => {
            expect(await booksService.rate(booksArray[0]._id)).toBe(booksArray[0]);
        });
    });
});