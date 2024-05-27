import { DatePipe, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PanoramaItem } from '../../panoramas-static-source/models/panorama-item';

@Component({
  selector: 'app-panorama-thumbnail',
  standalone: true,
  imports: [DatePipe, NgOptimizedImage],
  templateUrl: './panorama-thumbnail.component.html',
  styleUrl: './panorama-thumbnail.component.scss',
})
export class PanoramaThumbnailComponent {
  @Input({ required: true }) panorama!: PanoramaItem;
}
