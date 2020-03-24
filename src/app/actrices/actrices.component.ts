import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../services/dashboard.service';

@Component({
  selector: 'app-actrices',
  templateUrl: './actrices.component.html',
  styleUrls: ['./actrices.component.scss']
})
export class ActricesComponent implements OnInit {

  actrices:any[];

  constructor(private dashboard : DashboardService) { }

  ngOnInit() {
    this.dashboard.getActrices().subscribe(
      response => this.actrices = response);
  }

}
