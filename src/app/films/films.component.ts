import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { Films } from './films.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  
})

export class FilmsComponent implements OnInit {


  movies:any[];
  // dataSource = new DashboardSource(this.dashboard);
  // displayedColumns = ['title', 'description', 'year'];
  constructor( private dashboard : DashboardService ) {}

  ngOnInit() {
   
        this.dashboard.getMovies().subscribe(
        response => this.movies = response);
  }

// export class DashboardSource extends DataSource<any> {
//   constructor(private dashboard: DashboardService) {
//     super();
//   }
//   connect(): Observable<Films[]> {
//     return this.dashboard.getMovies();
//   }
  // disconnect() {}
 
}
