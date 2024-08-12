import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/interfaces';
import { BookService } from 'src/app/services/book.service';
import { QueryService } from 'src/app/services/query.service';
import { UtilsService } from 'src/app/services/utils.service';

export enum SEVERITY {
  'great' = 'great',
  'good' = 'good',
  'alright' = 'alright',
  'in-progress' = 'in-progress'
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent {
  public greatBooks: Book[];
  public goodBooks: Book[];
  public alrightBooks: Book[];
  public inProgressBooks: Book[];

  public display: boolean = false;
  public selectedBook: Book;
  public selectedBookRanking: SEVERITY;
  public selectedBookNewRanking: SEVERITY;

  constructor(private bookService: BookService, private queryService: QueryService, private utilsService: UtilsService) { }

  ngOnInit() {
    this.refreshBookList();
  }

  onDrop() {
    this.sendUpdatedGreatBooksOrder();
    this.sendUpdatedGoodBooksOrder();
    this.sendUpdatedAlrightBooksOrder();
  }

  private async refreshBookList() {
    const allBooks = await this.bookService.getAllRankedBooks();
    this.greatBooks = allBooks.greatBooks;
    this.goodBooks = allBooks.goodBooks;
    this.alrightBooks = allBooks.alrightBooks;
    this.inProgressBooks = allBooks.inProgressBooks;
  }

  private sendUpdatedGreatBooksOrder() {
    const idList = this.greatBooks.map((a) => a.id);
    this.queryService.put('greatbooks', { book_ids: idList }).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private sendUpdatedGoodBooksOrder() {
    const idList = this.goodBooks.map((a) => a.id);
    this.queryService.put('goodbooks', { book_ids: idList }).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private sendUpdatedAlrightBooksOrder() {
    const idList = this.alrightBooks.map((a) => a.id);
    this.queryService.put('alrightbooks', { book_ids: idList }).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // Books
  public editBook(selectedBook: Book, severity: SEVERITY) {
    this.selectedBook = this.utilsService.deepCopy(selectedBook);
    this.display = true;
    this.selectedBookRanking = severity;
    this.selectedBookNewRanking = severity
  }

  public createBook() {
    this.selectedBook = {
      id: -1,
      name: '',
      file_url: '',
      pros: '',
      cons: '',
      amazon_product_id: '',
      google_play_product_id: '',
      apple_product_id: '',
    };
    this.display = true;
    this.selectedBookRanking = SEVERITY['in-progress'];
    this.selectedBookNewRanking = SEVERITY['in-progress'];
  }

  public updateBook() {
    let query: any;
    if (this.selectedBook.id === -1) {
      query = this.queryService.post('book', this.selectedBook);
    } else {
      query = this.queryService.putWithID('book', this.selectedBook.id, this.selectedBook);
    }
    query.subscribe((updatedBook) => {
      if (this.selectedBookRanking !== this.selectedBookNewRanking) {
        let index;
        switch (this.selectedBookRanking) {
          case 'great':
            index = this.greatBooks.findIndex((book) => book.id === updatedBook.id);
            this.greatBooks.splice(index, 1);
            this.sendUpdatedGreatBooksOrder();
            break;
          case 'good':
            index = this.goodBooks.findIndex((book) => book.id === updatedBook.id);
            this.goodBooks.splice(index, 1);
            this.sendUpdatedGoodBooksOrder();
            break;
          case 'alright':
            index = this.alrightBooks.findIndex((book) => book.id === updatedBook.id);
            this.alrightBooks.splice(index, 1);
            this.sendUpdatedAlrightBooksOrder();
            break;
        }

        switch (this.selectedBookNewRanking) {
          case 'great':
            this.greatBooks.push(updatedBook);
            this.sendUpdatedGreatBooksOrder();
            break;
          case 'good':
            this.goodBooks.push(updatedBook);
            this.sendUpdatedGoodBooksOrder();
            break;
          case 'alright':
            this.alrightBooks.push(updatedBook);
            this.sendUpdatedAlrightBooksOrder();
            break;
        }
      }
      setTimeout(() => {
        this.display = false;
        this.refreshBookList();
      }, 100);
    });
  }

  // public deleteBook() {
  //   this.queryService.delete('book', this.selectedBook.id).subscribe((book) => {
  //     debugger;
  //     this.display = false;
  //     this.refreshBookList();
  //   });
  // }
}
