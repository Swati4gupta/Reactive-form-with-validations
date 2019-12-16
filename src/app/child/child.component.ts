import { Input,Output,EventEmitter,Component, OnInit,ViewChildren } from '@angular/core';
import { DataService } from './../data.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
}) 
export class ChildComponent implements OnInit {
msg:string;
childname:string="Shruti";
  constructor(private dataService:DataService) { }
  @Input() form;
  @Output() messageEvent=new EventEmitter<string>();
  ngOnInit() {
     this.dataService.currentMessage.subscribe(msg=>this.msg=msg);
  }

  sendMessage(){
    this.messageEvent.emit(this.childname);
  }
changeMsg(){
  this.dataService.changeMessage('Hello Swati : Called from child')
}
hello(){
  console.log('hello')
}

}