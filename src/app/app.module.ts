import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModuleModule } from './material-module/materialModule.module';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';

import { SettingsComponent } from './settings/settings.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { AllMemberComponent } from './all-member/all-member.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [			
    AppComponent,
      HomeComponent,
      BodyComponent,
      SidenavComponent,
      DashboardComponent,
      StatisticsComponent,
      SettingsComponent,
      NewMemberComponent,
      AllMemberComponent,
      AccountsComponent,
      LoginComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    HttpClient,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
