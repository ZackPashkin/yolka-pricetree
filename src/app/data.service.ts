import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Price } from './prices.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://yolka-home.com/app/prices.json';

  constructor(private _http: HttpClient) { }

  getPrices() {
    return this._http.get<Price[]>(this.apiUrl);

  }
}
