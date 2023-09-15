import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; //Para quitar las etiquetas html de la descripcion
import { Location } from '@angular/common'; //hacer back
import { trigger, state, style, transition, animate, query } from '@angular/animations';
import { BookmarkserviceService } from 'src/app/services/bookmarkservice.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css'],
  animations: [ // animacion del componente dinamico 
   trigger('zoomInOut', [
     state('void', style({ opacity: 0, transform: 'scale(0.5)' })),
     transition(':enter', [animate(300)]),
     transition(':leave', [animate(300)]), // Animación de salida
   ])
 ]
})
export class BookdetailsComponent implements OnInit {

  bookDetails: any; // aqui almaceno los detalles del libro 
  searchQuery: string = '';
  isBookmarked = false;
  purchaseInfo: any; // Información de compra

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private location: Location,
    private bookmarkService: BookmarkserviceService,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const bookId = params['id'];
      
      // Realizo una solicitud http para obtener los detalles del libro según el bookId.
      this.http.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`).subscribe(
        (data: any) => {
        this.bookDetails = data; // Aquí asigno los detalles del libro a la propiedad bookDetails.
        this.purchaseInfo = data.saleInfo; // Información de compra

        if (this.purchaseInfo && this.purchaseInfo.buyLink) {
          const buyLink = this.purchaseInfo.buyLink;
          console.log('Enlace de compra:', buyLink);
        }
      });
    });
  }

  //funcion para quitar las etiquetas html de la descripcion del libro
  sanitizeDescription(description: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(description);
  }


  //Boton de back
  goBack(): void {
    this.location.back();
  }

    // Toggle para agregar y quitar el libro de favoritos
    toggleBookmark(bookId: string): void {
      this.bookmarkService.toggleBookmark(bookId);
      this.isBookmarked = true;

    // tiempo de duracion del mensaje de aviso 
    setTimeout(() => {
      this.isBookmarked = false;
    }, 800);
  }

  // Método para obtener la URL del libro codificada
  getEncodedUrl(): string {
    return encodeURIComponent(window.location.href);
  }
}