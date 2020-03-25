import { FilmsComponent } from './films/films.component';
//import { ActricesComponent } from './actrices/actrices.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// mise en place de ma route du composant principal
const routes: Routes = [
  { path: '', component: FilmsComponent },
  //{ path: '', component: ActricesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
