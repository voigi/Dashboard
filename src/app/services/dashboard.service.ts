import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public http: HttpClient) {}

  getMovies():Observable<DashboardService[]>{
    return this.http.get<DashboardService[]>('http://localhost:8000/movie')
    .pipe(map(res => res));
    
  }
}
