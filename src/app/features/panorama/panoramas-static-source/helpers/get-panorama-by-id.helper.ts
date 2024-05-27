import { PanoramaItem } from '../models/panorama-item';
import { panoramaStaticSource } from '../panoramas-static-source';

export const getPanoramaById = (panoramaId: number): PanoramaItem | null => {
  return panoramaStaticSource.find((p) => p.id === panoramaId) ?? null;
};
