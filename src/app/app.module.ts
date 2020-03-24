import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule}from'@angular/common/http';

// module card angular material
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import composant
import { InterfaceComponent } from './interface/interface.component';
import { FilmsComponent } from './films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    FilmsComponent,
  
  ],
  imports: [
   
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //NgbModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
