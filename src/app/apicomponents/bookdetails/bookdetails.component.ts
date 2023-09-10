import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; //Para quitar las etiquetas html de la descripcion
import { Location } from '@angular/common'; //hacer back
import { trigger, state, style, transition, animate, query } from '@angular/animations';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css'],
  animations: [ // animaciones para el cambio de pagina 
   trigger('zoomInOut', [
     state('void', style({ opacity: 0, transform: 'scale(0.5)' })),
     transition(':enter', [animate(300)]),
     transition(':leave', [animate(300)]), // Animación de salida
   ])
 ]
})
export class BookdetailsComponent implements OnInit {

  bookDetails: any; // almaceno los detalles del libro 
  searchQuery: string = '';
  isSelected = false; // control de estado de los botones

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private location: Location
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const bookId = params['id'];
      
      // Realiza una solicitud HTTP para obtener los detalles del libro según el bookId.
      this.http.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`).subscribe(
        (data: any) => {
        this.bookDetails = data; // Asigna los detalles del libro a la propiedad bookDetails.
      });
    });
  }

  //funcion para quitar las etiquetas html de la descripcion
  sanitizeDescription(description: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(description);
  }


  //hacer back
  goBack(): void {
    this.location.back();
  }

  //control de estado de los botones

  // toggleSelection() {
  //   this.isSelected = !this.isSelected;
  // }

}