import { Injectable } from '@angular/core';

import { db, IBook } from  '../../classes/book';

@Injectable()
export class BookService {
  constructor() {
  }

  getBooks(): any {
    return db.books.toArray();
  }

  getBook(id: number): any {
    return db.books.get(id);
  }

  addBook(book: IBook) {
    db.books.add(book);
  }

}
