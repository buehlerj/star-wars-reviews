import { Injectable } from '@angular/core';
import { QueryService } from './query.service';
import { forkJoin, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Book } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private masterBookList$: Observable<Book[]>;
  private greatBooks$: Observable<Book[]>;
  private goodBooks$: Observable<Book[]>;
  private alrightBooks$: Observable<Book[]>;

  constructor(private queryService: QueryService) { }

  private loadListOfBooks(forceRequery: boolean = false): Observable<Book[]> {
    if (!this.masterBookList$ || forceRequery) {
      this.masterBookList$ = this.queryService.get('books').pipe(
        shareReplay(1)
      );
    }
    return this.masterBookList$;
  }

  private loadGreatBooks(forceRequery: boolean = false): Observable<Book[]> {
    if (!this.greatBooks$ || forceRequery) {
      this.greatBooks$ = this.queryService.get('greatbooks').pipe(
        shareReplay(1)
      );
    }
    return this.greatBooks$;
  }

  private loadGoodBooks(forceRequery: boolean = false): Observable<Book[]> {
    if (!this.goodBooks$ || forceRequery) {
      this.goodBooks$ = this.queryService.get('goodbooks').pipe(
        shareReplay(1)
      );
    }
    return this.goodBooks$;
  }

  private loadAlrightBooks(forceRequery: boolean = false): Observable<Book[]> {
    if (!this.alrightBooks$ || forceRequery) {
      this.alrightBooks$ = this.queryService.get('alrightbooks').pipe(
        shareReplay(1)
      );
    }
    return this.alrightBooks$;
  }

  public async getAllRankedBooks(): Promise<any> {
    const queries = [
      this.loadGreatBooks(),
      this.loadGoodBooks(),
      this.loadAlrightBooks(),
      this.loadListOfBooks()
    ];

    return forkJoin(queries).pipe(
      map((results) => {
        const greatBooks = results[0];
        const goodBooks = results[1];
        const alrightBooks = results[2];

        const existingIDs = [...greatBooks.map((a) => a.id), ...goodBooks.map((a) => a.id), ...alrightBooks.map((a) => a.id)];
        const inProgressBooks = results[3].filter((item) => !existingIDs.includes(item.id));
        return { greatBooks, goodBooks, alrightBooks, inProgressBooks };
      })
    ).toPromise();
  }
}
