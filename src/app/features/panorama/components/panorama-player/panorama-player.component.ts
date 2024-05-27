import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Viewer } from '@photo-sphere-viewer/core';
import { CubemapAdapter } from '@photo-sphere-viewer/cubemap-adapter';
import { PanoramaItem } from '../../panoramas-static-source/models/panorama-item';

@Component({
  selector: 'app-panorama-player',
  standalone: true,
  imports: [],
  templateUrl: './panorama-player.component.html',
  styleUrl: './panorama-player.component.scss',
})
export class PanoramaPlayerComponent implements OnInit, OnDestroy {
  @Input({ required: true }) panorama!: PanoramaItem;

  private viewer?: Viewer;

  constructor(private el: ElementRef) {}

  public ngOnInit(): void {
    this.viewer = new Viewer({
      container: this.el.nativeElement.querySelector('#viewer'),
      adapter: CubemapAdapter,
      panorama: {
        left: this.panorama.paths.left,
        front: this.panorama.paths.front,
        right: this.panorama.paths.right,
        back: this.panorama.paths.back,
        top: this.panorama.paths.top,
        bottom: this.panorama.paths.bottom,
      },
      caption: this.panorama.title,
    });
  }

  public ngOnDestroy(): void {
    if (this.viewer) {
      this.viewer.destroy();
    }
  }
}
