import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { Routes,RouterModule } from '@angular/router';
export const routes:Routes=
[{path:'student',component:StudentComponent}];
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports:[StudentComponent,RouterModule],
  declarations: [StudentComponent]
})
export class UserModule { }