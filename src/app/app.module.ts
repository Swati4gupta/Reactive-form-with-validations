import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SibilingComponent } from './sibiling/sibiling.component';
import { DataService } from './data.service';
import { StudentComponent } from './user/student/student.component';
import {UserModule } from './user/user.module'
export const routes:Routes=[{path:'parent',component:AppComponent},
{path:'child',component:ChildComponent},
{path:'sibiling',component:SibilingComponent},
{path:'user',loadChildren:'../app/user/user.module#UserModule'},
{path:'',redirectTo:'parent',pathMatch:'full'}];

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, UserModule,
  RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, ChildComponent, SibilingComponent ],
   exports: [ RouterModule,AppComponent, ChildComponent, SibilingComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
