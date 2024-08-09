import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book, CloneWarsEpisode, Relationship, Tag, TvEpisode } from '../interfaces/interfaces';
import { BookService } from './book.service';
import { CloneWarsEpisodesService } from './clone-wars-episodes.service';
import { TagService } from './tag.service';
import { BookTagsService } from './book-tags.service';
import { CwTagsService } from './cw-tags.service';
import { RebelsEpisodesService } from './rebels-episodes.service';
import { QueryService } from './query.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  /* ----- Subjects ----- */
  public booksLoadedRef: Subject<Book[]>;
  public cloneWarsEpisodesLoadedRef: Subject<CloneWarsEpisode[]>;
  public rebelsEpisodesLoadedRef: Subject<TvEpisode[]>;
  public tagsLoadedRef: Subject<Tag[]>;
  public bookTagRelsLoadedRef: Subject<Relationship[]>;
  public cwTagRelsLoadedRef: Subject<Relationship[]>;

  constructor(
    private http: HttpClient,
    private bookService: BookService,
    private cloneWarsEpisodesService: CloneWarsEpisodesService,
    private rebelsEpisodesService: RebelsEpisodesService,
    private tagService: TagService,
    private bookTagsService: BookTagsService,
    private cwTagsService: CwTagsService,
    private queryService: QueryService
  ) {
    this.booksLoadedRef = new Subject<Book[]>();
    this.cloneWarsEpisodesLoadedRef = new Subject<CloneWarsEpisode[]>();
    this.rebelsEpisodesLoadedRef = new Subject<TvEpisode[]>();
    this.tagsLoadedRef = new Subject<Tag[]>();
    this.bookTagRelsLoadedRef = new Subject<Relationship[]>();
    this.cwTagRelsLoadedRef = new Subject<Relationship[]>();
  }

  public loadBooks() {
    this.http.get('./assets/db/books.json').toPromise().then((data: Book[]) => {
      this.bookService.setListOfBooks(data);
      this.booksLoadedRef.next(data);
    });

    this.queryService.get('greatbooks').subscribe((data: any) => {
      this.bookService.setListOfGreatBooks(data);
    });

    this.queryService.get('goodbooks').subscribe((data: any) => {
      this.bookService.setListOfGoodBooks(data);
    });

    this.queryService.get('alrightbooks').subscribe((data: any) => {
      this.bookService.setListOfAlrightBooks(data);
    });
  }

  public loadCloneWarsEpisodes() {
    this.http.get('./assets/db/clone-wars-episodes.json').toPromise().then((data: CloneWarsEpisode[]) => {
      this.cloneWarsEpisodesService.setCloneWarsEpisodes(data);
      this.cloneWarsEpisodesLoadedRef.next(data);
    });
  }

  public loadRebelsEpisodes() {
    this.http.get('./assets/db/rebels-episodes.json').toPromise().then((data: CloneWarsEpisode[]) => {
      this.rebelsEpisodesService.setRebelsEpisodes(data);
      this.rebelsEpisodesLoadedRef.next(data);
    });
  }

  public loadTags() {
    this.http.get('./assets/db/tags.json').toPromise().then((data: Tag[]) => {
      this.tagService.setTags(data);
      this.tagsLoadedRef.next(data);
    });
  }

  public loadBookTagRelationships() {
    this.http.get('./assets/db/tag-books.json').toPromise().then((data: Relationship[]) => {
      this.bookTagsService.setBookTagRelationships(data);
      this.bookTagRelsLoadedRef.next(data);
    });
  }

  public loadCwTagRelationships() {
    this.http.get('./assets/db/tag-cw.json').toPromise().then((data: Relationship[]) => {
      this.cwTagsService.setCwTagRelationships(data);
      this.cwTagRelsLoadedRef.next(data);
    });
  }
}
