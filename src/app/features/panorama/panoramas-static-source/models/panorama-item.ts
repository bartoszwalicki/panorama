export interface PanoramaItem {
  id: number;
  title: string;
  paths: {
    left: string;
    front: string;
    right: string;
    back: string;
    top: string;
    bottom: string;
  };
}
