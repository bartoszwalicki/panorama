import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Viewer } from '@photo-sphere-viewer/core';
import { CubemapAdapter } from '@photo-sphere-viewer/cubemap-adapter';
import { PanoramaItem } from '../../panoramas-static-source/models/panorama-item';
import { PanoramaTypeEnum } from '../../panoramas-static-source/models/panorama-type.enum';

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
      ...this.getPanoramaTypeConfig(this.panorama),
      caption: this.panorama.caption,
      defaultZoomLvl: 25,
    });
  }

  public ngOnDestroy(): void {
    if (this.viewer) {
      this.viewer.destroy();
    }
  }

  private getPanoramaTypeConfig(panorama: PanoramaItem): any {
    if (panorama.type === PanoramaTypeEnum.cubeFaces) {
      return {
        adapter: CubemapAdapter,
        panorama: {
          type: 'separate',
          paths: {
            left: panorama.paths.left,
            front: panorama.paths.front,
            right: panorama.paths.right,
            back: panorama.paths.back,
            top: panorama.paths.top,
            bottom: panorama.paths.bottom,
          },
        },
      };
    }

    if (panorama.type === PanoramaTypeEnum.equirectangular) {
      return {
        panorama: panorama.paths.panorama,
      };
    }
  }
}
