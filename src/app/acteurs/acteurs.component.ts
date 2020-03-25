import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../services/dashboard.service';

@Component({
  selector: 'app-acteurs',
  templateUrl: './acteurs.component.html',
  styleUrls: ['./acteurs.component.scss']
})
export class ActeursComponent implements OnInit {

  // j'initialise un tableau d'acteurs
  acteurs:any[];

  constructor(private dashboard : DashboardService) { }

  // Je souscris à mon service DashboardService pur acceder à la méthode GetActeurs 
  ngOnInit(): void {
    this.dashboard.getActeurs().subscribe(
      response => this.acteurs = response);
  }

}
