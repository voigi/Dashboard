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
import { ChartsModule } from 'ng2-charts';

//import composant
import { InterfaceComponent } from './interface/interface.component';
import { FilmsComponent } from './films/films.component';
import { ActricesComponent } from './actrices/actrices.component';
import { ActeursComponent } from './acteurs/acteurs.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    FilmsComponent,
    ActricesComponent,
    ActeursComponent,
    CategoryComponent,
  
  ],
  imports: [
   
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
