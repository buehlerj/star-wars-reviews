import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book, CloneWarsEpisode, Relationship, Tag, TvEpisode } from '../interfaces/interfaces';
import { CloneWarsEpisodesService } from './clone-wars-episodes.service';
import { TagService } from './tag.service';
import { CwTagsService } from './cw-tags.service';
import { RebelsEpisodesService } from './rebels-episodes.service';

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
    private cloneWarsEpisodesService: CloneWarsEpisodesService,
    private rebelsEpisodesService: RebelsEpisodesService,
    private tagService: TagService,
    private cwTagsService: CwTagsService
  ) {
    this.booksLoadedRef = new Subject<Book[]>();
    this.cloneWarsEpisodesLoadedRef = new Subject<CloneWarsEpisode[]>();
    this.rebelsEpisodesLoadedRef = new Subject<TvEpisode[]>();
    this.tagsLoadedRef = new Subject<Tag[]>();
    this.bookTagRelsLoadedRef = new Subject<Relationship[]>();
    this.cwTagRelsLoadedRef = new Subject<Relationship[]>();
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

  public loadCwTagRelationships() {
    this.http.get('./assets/db/tag-cw.json').toPromise().then((data: Relationship[]) => {
      this.cwTagsService.setCwTagRelationships(data);
      this.cwTagRelsLoadedRef.next(data);
    });
  }
}
