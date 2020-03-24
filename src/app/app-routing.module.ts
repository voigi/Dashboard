import { FilmsComponent } from './films/films.component';
//import { ActricesComponent } from './actrices/actrices.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: FilmsComponent },
  //{ path: '', component: ActricesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
