import { Routes } from '@angular/router';
import { LayoutComponent } from './features/components/layout/layout.component';

export const routes: Routes = [
  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    component: LayoutComponent,
  },
];
