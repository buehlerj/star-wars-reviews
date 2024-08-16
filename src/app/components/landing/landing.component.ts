import { Component, HostListener, OnInit } from '@angular/core';
import { CloneWarsEpisode, Relationship, Tag } from '../../interfaces/interfaces';
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public loading: boolean;
  public previewHeader: boolean;
  public previewHeaderInterrupted: boolean;
  private currentCount: number;
  private totalFilesToLoadCount: number;

  // ADMIN
  private arrowKeyCurrentIndex: number;
  private arrowKeyListener: any[];

  constructor(private databaseService: DatabaseService, private router: Router) {
    this.loading = true;
    this.previewHeader = false;
    this.previewHeaderInterrupted = false;
    this.currentCount = 0;
    this.totalFilesToLoadCount = 4;

    this.arrowKeyListener = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    this.arrowKeyCurrentIndex = 0;
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
    this.databaseService.loadCloneWarsEpisodes();
    this.databaseService.loadRebelsEpisodes();
    this.databaseService.loadTags();
    this.databaseService.loadCwTagRelationships();

    this.databaseService.cloneWarsEpisodesLoadedRef.subscribe((_data: CloneWarsEpisode[]) => { this.checkIfDoneLoading(); });
    this.databaseService.rebelsEpisodesLoadedRef.subscribe((_data) => { this.checkIfDoneLoading(); });
    this.databaseService.tagsLoadedRef.subscribe((_data: Tag[]) => { this.checkIfDoneLoading(); });
    this.databaseService.cwTagRelsLoadedRef.subscribe((_data: Relationship[]) => { this.checkIfDoneLoading(); });
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key === this.arrowKeyListener[this.arrowKeyCurrentIndex]) {
      this.arrowKeyCurrentIndex++;
      if (this.arrowKeyCurrentIndex === this.arrowKeyListener.length) {
        this.arrowKeyCurrentIndex = 0;
        this.router.navigate(['/admin']);
      }
    } else {
      this.arrowKeyCurrentIndex = 0;
    }
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
