import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooglebooksComponent } from './apicomponents/googlebooks/googlebooks.component';
import { BookdetailsComponent } from './apicomponents/bookdetails/bookdetails.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookmarksComponent } from './views/bookmarks/bookmarks.component';
import { ChatgptComponent } from './apicomponents/chatgpt/chatgpt.component';

@NgModule({
  declarations: [
    AppComponent,
    GooglebooksComponent,
    BookdetailsComponent,
    HomeComponent,
    BookmarksComponent,
    ChatgptComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
