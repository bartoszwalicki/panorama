import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanoramaCatalogComponent } from './panorama-catalog/panorama-catalog.component';
import { PanoramaPlayerComponent } from './panorama-player/panorama-player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, PanoramaPlayerComponent, PanoramaCatalogComponent],
})
export class AppComponent {
  title = 'panorama-player';
}
