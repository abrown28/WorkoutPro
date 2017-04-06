import { Component } from '@angular/core';
import { environment } from '../environments/environment';

import { BookService } from './services/book/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = environment.title;
  
  constructor(private bookService: BookService) {
    //this.bookService.addBook({name:'test', description:'desc test'});
    //this.bookService.getBooks().then(books => console.log(books));
  }
}
