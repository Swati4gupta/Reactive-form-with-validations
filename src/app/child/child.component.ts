import { Input,Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
}) 
export class ChildComponent implements OnInit {
msg:string;
  constructor(private dataService:DataService) { }
  @Input() form;
  ngOnInit() {
     this.dataService.currentMessage.subscribe(msg=>this.msg=msg);
  }
changeMsg(){
  this.dataService.changeMessage('Hello Swati : Called from child')
}


}