import { PanoramaItem } from '../models/panorama-item';
import { panoramaStaticSource } from '../panoramas';

export const getPanoramaById = (panoramaId: number): PanoramaItem | null => {
  return panoramaStaticSource.find((p) => p.id === panoramaId) ?? null;
};
