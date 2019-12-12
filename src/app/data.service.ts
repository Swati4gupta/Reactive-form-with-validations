import { Injectable } from '@angular/core';
import { ReplaySubject,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
private messageSource= new BehaviorSubject<string>('Hello Swati');

currentMessage= this.messageSource.asObservable();

  constructor() { }

  changeMessage(newMsg){
    this.messageSource.next(newMsg);
  }

}