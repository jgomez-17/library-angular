import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-googlebooks',
  templateUrl: './googlebooks.component.html',
  styleUrls: ['./googlebooks.component.css'],
})
export class GooglebooksComponent implements OnInit{
  books: any[] = [];
  apiKey = 'AIzaSyBeRb2twAEE-4V6q6gpA9y1EzIZ05EexMs';
  searchQuery: string = '';


  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.searchQuery = queryParams ['q'] || '';
      if (!this.searchQuery) {
        this.searchQuery = '';
        this.searchBooks();

      } else {
        this.searchBooks();
      }
    });    
  }

  searchBooks() {
    const defaultQuery = 'angular'; // Término de búsqueda predeterminado
    const query = this.searchQuery.trim() || defaultQuery;

    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${this.apiKey}`;

    this.http.get(url).subscribe(
      (data: any) => {
        console.log(data); // Imprime la respuesta en la consola
        if (data.items) {
          this.books = data.items;
        } else {
          this.books = [];
      }

      
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { q: query },
        queryParamsHandling: 'merge',
      });
    }, 
    (error) => {
      console.error('Error al hacer la solicitud:', error);
    }
    );
  }

  //funcion para navegar al componente dinamico al seleccionar un libro
  onSelectBook(bookId: string) {
    this.router.navigate(['/book', bookId], {
      queryParams: { q: this.searchQuery },
      queryParamsHandling: 'merge',
    });
  }
}

