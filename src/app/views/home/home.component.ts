import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // control de estado de los botones
  isSelected = false;

  constructor(
    private renderer: 
    Renderer2, 
    private el: ElementRef
    ) { }


    //control de estado de los botones
   toggleSelection() {
     this.isSelected = !this.isSelected;
   }
   
   // Agrega un evento para cerrar el botón cuando se hace clic fuera de él
  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    if (!this.el.nativeElement.contains(target)) {
      this.isSelected = false;
    }
  }
}
