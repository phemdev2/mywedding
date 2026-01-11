// types/index.ts or types.ts

export interface ProgramItem {
  title: string;
  subtitle: string;
  time?: string;
}

export interface Hymn {
  id: string;
  category: string;
  title: string;
  type: 'song' | 'liturgy';
  verses: string[];
}

export interface Reading {
  reference: string;
  reader: string;
  text: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
}