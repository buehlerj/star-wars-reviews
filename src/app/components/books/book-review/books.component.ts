import { Component, OnInit } from '@angular/core';
import { Book } from '../../../interfaces/interfaces';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BookReviewComponent implements OnInit {

  public bestCanonBooks: Book[];
  public goodCanonBooks: Book[];
  public alrightCanonBooks: Book[];
  public badCanonBooks: Book[];
  public inProgress: Book[];

  constructor(private bookService: BookService) {
    this.bestCanonBooks = [];
    this.goodCanonBooks = [];
    this.alrightCanonBooks = [];
    this.badCanonBooks = [];
  }

  async ngOnInit(): Promise<void> {
    const allBooks = await this.bookService.getAllRankedBooks();
    this.bestCanonBooks = allBooks.greatBooks;
    this.goodCanonBooks = allBooks.goodBooks;
    this.alrightCanonBooks = allBooks.alrightBooks;
    this.inProgress = allBooks.inProgressBooks;
  }
}
