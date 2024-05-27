import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PanoramaThumbnailComponent } from '../../components/panorama-thumbnail/panorama-thumbnail.component';
import { PanoramaItem } from '../../panoramas-static-source/models/panorama-item';
import { panoramaStaticSource } from '../../panoramas-static-source/panoramas';

@Component({
  selector: 'app-panorama-catalog',
  standalone: true,
  templateUrl: './panorama-catalog-page.component.html',
  styleUrl: './panorama-catalog-page.component.scss',
  imports: [PanoramaThumbnailComponent],
})
export class PanoramaCatalogPageComponent {
  public panoramaList: Array<PanoramaItem> = panoramaStaticSource;

  constructor(public router: Router) {}

  public navigateToPlayer(panoramaId: number): void {
    this.router.navigate(['panorama', panoramaId]);
  }
}
