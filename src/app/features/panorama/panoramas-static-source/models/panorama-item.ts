export interface PanoramaItem {
  id: number;
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
