import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../services/dashboard.service';

@Component({
  selector: 'app-acteurs',
  templateUrl: './acteurs.component.html',
  styleUrls: ['./acteurs.component.scss']
})
export class ActeursComponent implements OnInit {

  acteurs:any[];

  constructor(private dashboard : DashboardService) { }

  ngOnInit(): void {
    this.dashboard.getActeurs().subscribe(
      response => this.acteurs = response);
  }

}
