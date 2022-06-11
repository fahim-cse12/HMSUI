import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewMemberComponent } from './new-member/new-member.component';
import { AllMemberComponent } from './all-member/all-member.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'newMember', component: NewMemberComponent},
  {path: 'allMember', component: AllMemberComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'accounts', component: AccountsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
