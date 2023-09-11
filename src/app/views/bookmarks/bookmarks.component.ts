import { Component, OnInit } from '@angular/core';
import { BookmarkserviceService } from 'src/app/services/bookmarkservice.service';
import { Location } from '@angular/common'; //hacer back
import { Router } from '@angular/router';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit{
  bookmarks: string[] = [];

  constructor(
    private bookmarkService: BookmarkserviceService,
    private location: Location,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.bookmarks = this.bookmarkService.getBookmarks();
  }

  // Función para quitar el marcado de un libro
  removeBookmark(bookId: string): void {
    this.bookmarkService.toggleBookmark(bookId); // Llama al método del servicio para quitar el marcado
    // Actualiza la lista de marcadores después de quitar el marcado
    this.bookmarks = this.bookmarkService.getBookmarks();
  }

    //Boton de back
    goBack(): void {
      this.location.back();
    }
}
