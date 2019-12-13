import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
name:'doubles'
})
export class AppPipe implements PipeTransform{
transform(num: number): number { 
      
      return num * num 
   } 
 }