import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedLayoutComponent } from './components/shared-layout/shared-layout.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { AgentsComponent } from './components/agents/agents.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: SharedLayoutComponent,
    children: [
      {
        path: 'properties',
        component: PropertiesComponent,
      },
      {
        path: 'agents',
        component: AgentsComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: '',
        component: SharedLayoutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
