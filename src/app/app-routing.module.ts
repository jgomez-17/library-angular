import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GooglebooksComponent } from './apicomponents/googlebooks/googlebooks.component';
import { BookdetailsComponent } from './apicomponents/bookdetails/bookdetails.component';
import { BookmarksComponent } from './views/bookmarks/bookmarks.component';

const routes: Routes = [
  { path:'', redirectTo: '/googlebooks', pathMatch: 'full'},
  { path:'home', component: HomeComponent},
  { path:'googlebooks', component: GooglebooksComponent},
  { path:'book/:id', component: BookdetailsComponent}, //ruta del componente dinamico
  { path:'bookmarks', component: BookmarksComponent}, //pagina de marcadores
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
