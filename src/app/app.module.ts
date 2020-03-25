
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}from'@angular/common/http';

// module  angular material module
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import ng2 chart module
import { ChartsModule } from 'ng2-charts';

//import ng-Apexchart module
import { NgApexchartsModule } from 'ng-apexcharts';


//import composant
import { InterfaceComponent } from './interface/interface.component';
import { FilmsComponent } from './films/films.component';
import { ActricesComponent } from './actrices/actrices.component';
import { ActeursComponent } from './acteurs/acteurs.component';
import { CategoryComponent } from './category/category.component';
import { ProductionsComponent } from './productions/productions.component';
import { RepartitionComponent } from './repartition/repartition.component';
import { MoyenneComponent } from './moyenne/moyenne.component';
import { SignatureComponent } from './signature/signature.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    FilmsComponent,
    ActricesComponent,
    ActeursComponent,
    CategoryComponent,
    ProductionsComponent,
    RepartitionComponent,
    MoyenneComponent,
    SignatureComponent,
  
  ],
  imports: [
    
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    NgApexchartsModule
    

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
