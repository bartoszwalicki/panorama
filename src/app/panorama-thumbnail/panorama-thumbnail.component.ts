import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PanoramaItem } from '../panoramas/models/panorama-item';

@Component({
  selector: 'app-panorama-thumbnail',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './panorama-thumbnail.component.html',
  styleUrl: './panorama-thumbnail.component.scss',
})
export class PanoramaThumbnailComponent {
  @Input({ required: true }) panorama!: PanoramaItem;
}
