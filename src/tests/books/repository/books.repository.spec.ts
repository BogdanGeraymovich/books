import * as mongooseMock from 'mongooseMock';
import * as proxyquire from 'proxyquire';
import { BookRepository } from '../../../modules/books/repositories/book.repository';

const booksArray = [{
    _id: 'af0775ca-73f2-4c83-8e30-39400be1ea8a',
    title: 'Book 1',
    rate: 1,
}, {
    _id: 'af0775ca-73f3-4c83-8e30-39400be1eg8a',
    title: 'Book 2',
    rate: 1,
}];

describe('BookRepository', () => {
    let bookRepository: BookRepository;
    let BookModel;

    beforeEach(async () => {
        BookModel = {
            find: jest.fn().mockImplementation(() => ({ lean: () => ({ exec: () => booksArray }) })),
            create: jest.fn().mockImplementation(() => booksArray[0]),
            findOne: jest.fn().mockImplementation(() => ({ lean: () => ({ exec: () => booksArray[0] }), save: () => booksArray[0] })),
            save: jest.fn().mockImplementation(() => booksArray[0]),
        };
        bookRepository = new BookRepository({ mongooseModel: BookModel });
    });

    describe('create', () => {
        it('return created book', async () => {
            expect(await bookRepository.create(booksArray[0])).toBe(booksArray[0]);
        });
    });

    describe('findAll', () => {
        it('get array of books', async () => {
            expect(await bookRepository.findAll()).toBe(booksArray);
        });
    });

    describe('findById', () => {
        it('get book by id', async () => {
            expect(await bookRepository.findById(booksArray[0]._id)).toBe(booksArray[0]);
        });
    });

    describe('rate', () => {
        it('rate book by id', async () => {
            expect(await bookRepository.rate(booksArray[0]._id)).toBe(booksArray[0]);
        });
    });
});