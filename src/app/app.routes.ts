import { Routes } from '@angular/router';
import { PanoramaCatalogPageComponent } from './features/panorama/pages/panorama-catalog-page/panorama-catalog-page.component';
import { PanoramaDisplayPageComponent } from './features/panorama/pages/panorama-display-page/panorama-display-page.component';

export const routes: Routes = [
  { path: '', component: PanoramaCatalogPageComponent },
  { path: 'panorama/:id', component: PanoramaDisplayPageComponent },
];
