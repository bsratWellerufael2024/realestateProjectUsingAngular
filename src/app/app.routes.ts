import { Routes } from '@angular/router';
import { LayoutComponent } from './features/components/layout/layout.component';

export const routes: Routes = [
   {
    path:"",
    component:LayoutComponent
   },
   {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
   }
];
