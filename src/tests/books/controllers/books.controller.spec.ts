import { BooksController } from '../../../modules/books/controllers/books.controller';
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
    let booksController: BooksController;

    beforeEach(async () => {
        booksService = {
            findAll: jest.fn().mockImplementation(() => booksArray),
            create: jest.fn().mockImplementation(() => booksArray[0]),
            findById: jest.fn().mockImplementation(() => booksArray[0]),
            rate: jest.fn().mockImplementation(() => booksArray[0]),
        };
        booksController = new BooksController(booksService);
    });

    describe('create', () => {
        it('return created book', async () => {
            expect(await booksController.create()).toBe(booksArray[0]);
        });
    });

    describe('findAll', () => {
        it('get array of books', async () => {
            expect(await booksController.findAll()).toBe(booksArray);
        });
    });

    describe('findById', () => {
        it('get book by id', async () => {
            expect(await booksController.findById({ id: booksArray[0]._id })).toBe(booksArray[0]);
        });
    });

    describe('rate', () => {
        it('rate book by id', async () => {
            expect(await booksController.rate({ id: booksArray[0]._id })).toBe(booksArray[0]);
        });
    });
});