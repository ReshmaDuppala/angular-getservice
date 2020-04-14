import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Data} from './Data';

@Injectable()
export class DataService {
  data:Data[];
  url = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(){

  }
 get() {
    return   this.httpClient.get<Data[]>(this.url);
 }
}