import { PanoramaTypeEnum } from './panorama-type.enum';

export type PanoramaItem = EquirectangularPanorama | CubicPanorama;

interface PanoramaBase {
  id: number;
  type: PanoramaTypeEnum;
  rawTitle: string;
  caption: string;
}

interface EquirectangularPanorama extends PanoramaBase {
  type: PanoramaTypeEnum.equirectangular;
  paths: {
    panorama: string;
  };
}

interface CubicPanorama extends PanoramaBase {
  type: PanoramaTypeEnum.cubeFaces;
  paths: {
    left: string;
    front: string;
    right: string;
    back: string;
    top: string;
    bottom: string;
  };
}
