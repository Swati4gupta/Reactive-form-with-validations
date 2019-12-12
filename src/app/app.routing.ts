import {Routes,RouterModule} from '@angular/routes';
import {NgModule } from '@angular/core';
import {ChildComponent} from './child/child.component';
const routes:Routes=[{path:'child',component:ChildComponent}];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
  providers:[]
  })
export class AppRoutingModule{
  
  
  constructor(){

  }
 
}