import { PanoramaTypeEnum } from './panorama-type.enum';

export interface PanoramaItem {
  id: number;
  type: PanoramaTypeEnum;
  rawTitle: string;
  caption: string;
  paths: {
    left: string;
    front: string;
    right: string;
    back: string;
    top: string;
    bottom: string;
  };
}
