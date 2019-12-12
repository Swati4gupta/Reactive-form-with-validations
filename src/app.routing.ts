import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SibilingComponent } from './sibiling/sibiling.component';
export const routes:Routes=[{path:'parent',component:AppComponent},
{path:'child',component:ChildComponent},
{path:'sibiling',component:SibilingComponent},
{path:'user',loadChildren:'../app/user/user.module#UserModule'},
{path:'',redirectTo:'parent',pathMatch:'full'}];

@NgModule({
  imports:   [RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRouting { }