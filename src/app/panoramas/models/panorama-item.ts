export interface PanoramaItem {
  id: number;
  title: string;
  date: Date;
  paths: {
    left: string;
    front: string;
    right: string;
    back: string;
    top: string;
    bottom: string;
  };
}
