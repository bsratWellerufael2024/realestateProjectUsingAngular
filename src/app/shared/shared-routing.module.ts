import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedLayoutComponent } from './components/shared-layout/shared-layout.component';

const routes: Routes = [
  {
    path:"shared",
    component:SharedLayoutComponent,
    children:[
      {
        path:"",
        component:SharedLayoutComponent
      },
      {
        path:"navbar",
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
