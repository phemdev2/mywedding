
export interface ProgramItem {
  time?: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export interface Hymn {
  id: string;
  title: string;
  verses: string[];
}

export interface Reading {
  reference: string;
  text: string;
  reader: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
}
