import { Component, OnInit } from '@angular/core';
import { ReviewClass } from '../../../interfaces/enums';
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
  public inQueue: Book[];

  constructor(private bookService: BookService) {
    this.bestCanonBooks = [];
    this.goodCanonBooks = [];
    this.alrightCanonBooks = [];
    this.badCanonBooks = [];
  }

  ngOnInit(): void {
    const lastBestEpisode: number = 4;
    const lastGoodEpisode: number = 9;
    const lastAlrightEpisode: number = 14;

    let code: ReviewClass = ReviewClass.BEST;

    this.bookService.getListOfBooks().forEach((episode: Book) => {
      switch (code) {
        case ReviewClass.BEST:
          // this.bestCanonBooks.push(episode);
          break;
        case ReviewClass.GOOD:
          this.goodCanonBooks.push(episode);
          break;
        case ReviewClass.ALRIGHT:
          this.alrightCanonBooks.push(episode);
          break;
        case ReviewClass.BAD:
          this.badCanonBooks.push(episode);
          break;
      }

      switch (episode.id) {
        case lastBestEpisode:
          code = ReviewClass.GOOD;
          break;
        case lastGoodEpisode:
          code = ReviewClass.ALRIGHT;
          break;
        case lastAlrightEpisode:
          code = ReviewClass.BAD;
          break;
      }
    });

    this.bestCanonBooks = this.bookService.getGreatBooks();

    this.inProgress = this.bookService.getInProgressBooks();
    this.inQueue = this.bookService.getInQueueBooks();
  }
}
