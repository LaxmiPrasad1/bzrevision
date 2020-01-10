import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('http://restcountries.eu/rest/v2/all');
  }
  getContent()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}