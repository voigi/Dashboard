import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { Data } from '../../app/Data';

@Component({
  selector: 'app-productions',
  templateUrl: './productions.component.html',
  styleUrls: ['./productions.component.scss']
})
export class ProductionsComponent implements OnInit {

  data: Data[];  
  url = 'http://localhost:8000/movie';  
  Title = [];  
  Year = [];  
  barchart :any =[]; 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.Title.push(x.title);  
        this.Year.push(x.year);  
      });
      
      this  
      this.barchart = new Chart('canvas', {  
        type: 'bar',  
        data: {  
          labels: this.Title,  
          datasets: [  
            {  
              data: this.Year,  
              borderColor: '#3cba9f',  
              backgroundColor: [  
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Blue",
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Blue",
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF"    
              ],  
              fill: true  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
    }); 
      
  }

}
