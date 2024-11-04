import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { ApproveListingsComponent } from './components/approve-listings/approve-listings.component';
import { ManageInquiriesComponent } from './components/manage-inquiries/manage-inquiries.component';
import { AdminLayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from '../../core/guards/admin-guard.guard';
import { LoginComponentComponent } from '../auth/components/login-component/login-component.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'approve', component: ApproveListingsComponent },
      { path: 'manage', component: ManageInquiriesComponent },
    ]
  },
  { path: "login", component: LoginComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
