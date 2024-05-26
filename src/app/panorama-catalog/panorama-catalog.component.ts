import { Component } from '@angular/core';
import { PanoramaThumbnailComponent } from '../panorama-thumbnail/panorama-thumbnail.component';
import { PanoramaItem } from '../panoramas/models/panorama-item';
import { panoramasList } from '../panoramas/panoramas';

@Component({
  selector: 'app-panorama-catalog',
  standalone: true,
  templateUrl: './panorama-catalog.component.html',
  styleUrl: './panorama-catalog.component.scss',
  imports: [PanoramaThumbnailComponent],
})
export class PanoramaCatalogComponent {
  public panoramaList: Array<PanoramaItem> = panoramasList;
}
