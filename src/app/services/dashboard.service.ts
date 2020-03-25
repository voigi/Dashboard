import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

// HttpClient est utilisé pour les requêtes
  constructor(public http: HttpClient) {}

// les méthodes de mon service ,on passe ici  par observable de rxjs.
// ce sont ces méthodes qui sont appelés à être souscrite dans les fichiers .ts de mes composants 

  getMovies():Observable<DashboardService[]>{
    return this.http.get<DashboardService[]>('http://localhost:8000/movie')
    .pipe(map(res => res));
    
  }
  getActrices():Observable<DashboardService[]>{
    return this.http.get<DashboardService[]>('http://localhost:8000/actor/feminin')
    .pipe(map(res => res));
    
  }
  getActeurs():Observable<DashboardService[]>{
    return this.http.get<DashboardService[]>('http://localhost:8000/actor/masculin')
    .pipe(map(res => res));
    
  }
}
