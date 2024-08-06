export interface Author {
  id: number;
  name: string;
  age: number;
}

export interface Book {
  id: number;
  name: string;
  pages: number;
  chapters: number;
  isbn: string;
  publisherName: string;
  author: Author;
}
