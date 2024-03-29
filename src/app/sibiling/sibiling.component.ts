import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
@Component({
  selector: 'app-sibiling',
  templateUrl: './sibiling.component.html',
  styleUrls: ['./sibiling.component.css']
})
export class SibilingComponent implements OnInit {
msg:string;
sibiling:string='Sujata';
  constructor(private dataService:DataService) { }

  ngOnInit() 
  {
    this.dataService.currentMessage.subscribe(msg=>this.msg=msg);
  }

  changeMsg(){
    this.dataService.changeMessage('Hello Swati : Called from sibiling')
  }



}