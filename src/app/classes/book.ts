import Dexie from 'dexie';

export class BookDatabase extends Dexie {
  books: Dexie.Table<IBook, number>;
  pages: Dexie.Table<IPage, number>;
  
  constructor() {  
    super("BookDatabase");
    
    //
    // Define tables and indexes
    // (Here's where the implicit table props are dynamically created)
    //
    this.version(1).stores({
      books: '++id, name, description',
      pages: '++id, bookdId, name, text',
    });
  }
}

// By defining the interface of table records,
// you get better type safety and code completion
export interface IBook {
  id?: number;
  name: string;
  description: string;
};

export interface IPage {
  id?: number;
  bookId: number;
  name: string;
  text: string;
};

export var db = new BookDatabase();
