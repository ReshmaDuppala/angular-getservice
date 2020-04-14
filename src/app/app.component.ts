import { Component,OnInit } from '@angular/core';
import { DataService } from './data.service';

import {data} from './data';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title = 'Get Service';
  data: data[];
  
  input:data;

  constructor(private service: DataService){

  }
  ngOnInit(): void {
  // ...

this.getPages();
this.input= new data();
}


getPages():void{
  this.service.get().subscribe((arg) => {
    this.data=[];
    this.data = arg;

    console.log(arg);
    console.log(this.data);
  });
}
onGet():void
{
this.getPages();
}

}

