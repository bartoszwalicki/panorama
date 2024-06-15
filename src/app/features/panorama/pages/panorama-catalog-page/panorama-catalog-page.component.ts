import {
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarComponent } from '../../../search/search-bar/search-bar.component';
import { PanoramaThumbnailComponent } from '../../components/panorama-thumbnail/panorama-thumbnail.component';
import { PanoramaItem } from '../../panoramas-static-source/models/panorama-item';
import { panoramaStaticSource } from '../../panoramas-static-source/panoramas-static-source';

@Component({
  selector: 'app-panorama-catalog',
  standalone: true,
  templateUrl: './panorama-catalog-page.component.html',
  styleUrl: './panorama-catalog-page.component.scss',
  imports: [PanoramaThumbnailComponent, SearchBarComponent],
})
export class PanoramaCatalogPageComponent {
  public panoramaList$$: Signal<Array<PanoramaItem>>;
  public searchTermFromSessionStorage: string;

  private readonly sortedStaticPanoramaList: Array<PanoramaItem>;

  private searchTerm$$: WritableSignal<string> = signal('');

  constructor(public router: Router) {
    this.sortedStaticPanoramaList = this.sortPanoramaList(panoramaStaticSource);
    this.panoramaList$$ = this.initDynamicPanoramaList();
    this.searchTermFromSessionStorage =
      sessionStorage.getItem('searchTerm') ?? '';
  }

  public navigateToPlayer(panoramaId: number): void {
    this.router.navigate(['panorama', panoramaId]);
  }

  public searchTermUpdated(term: string): void {
    this.searchTerm$$.set(term);
    sessionStorage.setItem('searchTerm', term);
  }

  private initDynamicPanoramaList() {
    return computed(() => {
      const filteredPanoramaList = this.sortedStaticPanoramaList.filter(
        (pano) =>
          pano.caption.toLowerCase().includes(this.searchTerm$$().toLowerCase())
      );

      return filteredPanoramaList;
    });
  }

  private sortPanoramaList(list: Array<PanoramaItem>): Array<PanoramaItem> {
    return list.sort((a, b) => a.caption.localeCompare(b.caption));
  }
}
