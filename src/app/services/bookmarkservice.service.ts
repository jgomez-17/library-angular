import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarkserviceService {
  private bookmarks: Set<string> = new Set();


  constructor() {
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks) {
      this.bookmarks = new Set(JSON.parse(storedBookmarks));
    }
   }


   //Funcion para marcar libros como favoritos 
   getBookmarks(): string[] {
    return Array.from(this.bookmarks);
   }

   toggleBookmark(bookId: string): void {
    if (this.bookmarks.has(bookId)) {
      this.bookmarks.delete(bookId);
    } else {
      this.bookmarks.add(bookId);
    }
    localStorage.setItem('bookmarks', JSON.stringify(Array.from(this.bookmarks)));
   }
}
