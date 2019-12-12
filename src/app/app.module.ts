import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SibilingComponent } from './sibiling/sibiling.component';
import { DataService } from './data.service';

export const routes:Routes=[{path:'child',component:ChildComponent}];
@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, 
  RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, ChildComponent, SibilingComponent ],
   exports: [ RouterModule,AppComponent, ChildComponent, SibilingComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
