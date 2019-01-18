import { Component, OnInit } from '@angular/core';
import { Price } from './prices.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  prices$: Price[];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    return this.dataService.getPrices()
    .subscribe(data => this.prices$ = data );
  }
  
}
