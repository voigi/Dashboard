import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  
})

export class FilmsComponent implements OnInit {

  movies:any[];

  constructor( private dashboard : DashboardService ) {}

  ngOnInit() {
   
        this.dashboard.getMovies().subscribe(
        response => this.movies = response);
  }


 
}
