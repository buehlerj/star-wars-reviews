import { Injectable } from '@angular/core';
import { TvEpisode } from '../interfaces/interfaces';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class RebelsEpisodesService {

  private rebelsEpisodes: TvEpisode[];

  constructor(private utilsService: UtilsService) { }

  public setRebelsEpisodes(newRebelsEps: TvEpisode[]) {
    this.rebelsEpisodes = newRebelsEps;
  }

  public getRebelsEpisodes(): TvEpisode[] {
    return this.rebelsEpisodes;
  }

  public getRebelsRelease(): TvEpisode[] {
    const episodesCopy = this.utilsService.deepCopy(this.rebelsEpisodes);
    return episodesCopy.sort((a: TvEpisode, b: TvEpisode) => a.releaseOrder - b.releaseOrder);
  }


}
