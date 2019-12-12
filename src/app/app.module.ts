import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SibilingComponent } from './sibiling/sibiling.component';
import { DataService } from './data.service';
import { StudentComponent } from './user/student/student.component';
import {UserModule } from './user/user.module';
import { AppRouting } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, UserModule,
  AppRouting ],
  declarations: [ AppComponent, ChildComponent, SibilingComponent ],
   exports: [ RouterModule,AppComponent, ChildComponent, SibilingComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
