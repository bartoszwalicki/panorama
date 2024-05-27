import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanoramaPlayerComponent } from '../../components/panorama-player/panorama-player.component';
import { getPanoramaById } from '../../panoramas-static-source/helpers/get-panorama-by-id.helper';
import { PanoramaItem } from '../../panoramas-static-source/models/panorama-item';

@Component({
  selector: 'app-panorama-display-page',
  standalone: true,
  templateUrl: './panorama-display-page.component.html',
  styleUrl: './panorama-display-page.component.scss',
  imports: [PanoramaPlayerComponent],
})
export class PanoramaDisplayPageComponent {
  public panorama: PanoramaItem | null = null;

  constructor(private activatedRoute: ActivatedRoute) {
    const panoramaId: number = parseInt(
      this.activatedRoute.snapshot.paramMap.get('id') ?? '0',
      10
    );

    this.panorama = getPanoramaById(panoramaId);
  }
}
