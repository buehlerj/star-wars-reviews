import { Component, OnInit } from '@angular/core';
import { Book, CloneWarsEpisode, Relationship, Tag } from './interfaces/interfaces';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public loading: boolean;
  public previewHeader: boolean;
  public previewHeaderInterrupted: boolean;
  private currentCount: number;
  private totalFilesToLoadCount: number;

  constructor(private databaseService: DatabaseService) {
    this.loading = true;
    this.previewHeader = false;
    this.previewHeaderInterrupted = false;
    this.currentCount = 0;
    this.totalFilesToLoadCount = 5;
  }

  ngOnInit() {
    setTimeout(() => {
      if (!this.previewHeaderInterrupted) {
        this.previewHeader = true;
      }
      setTimeout(() => {
        if (!this.previewHeaderInterrupted) {
          this.previewHeader = false;
        }
      }, 1000);
    }, 2000);
    this.databaseService.loadBooks();
    this.databaseService.loadCloneWarsEpisodes();
    this.databaseService.loadTags();
    this.databaseService.loadBookTagRelationships();
    this.databaseService.loadCwTagRelationships();

    this.databaseService.booksLoadedRef.subscribe((_data: Book[]) => { this.checkIfDoneLoading(); });
    this.databaseService.cloneWarsEpisodesLoadedRef.subscribe((_data: CloneWarsEpisode[]) => { this.checkIfDoneLoading(); });
    this.databaseService.tagsLoadedRef.subscribe((_data: Tag[]) => { this.checkIfDoneLoading(); });
    this.databaseService.bookTagRelsLoadedRef.subscribe((_data: Relationship[]) => { this.checkIfDoneLoading(); });
    this.databaseService.cwTagRelsLoadedRef.subscribe((_data: Relationship[]) => { this.checkIfDoneLoading(); });
  }

  public scroll(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }

  private checkIfDoneLoading() {
    this.currentCount++;
    if (this.totalFilesToLoadCount === this.currentCount) {
      this.loading = false;
    }
  }
}
