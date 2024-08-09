export interface Author {
  id: number;
  name: string;
  age: string;
}

export interface Book {
  id: number;
  name: string;
  pages: string;
  chapters: string;
  isbn: string;
  publisherName: string;
  author: Author;
}
