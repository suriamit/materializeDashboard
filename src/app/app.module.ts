import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntuneComponent } from './intune/intune.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { VulnerabilityComponent } from './vulnerability/vulnerability.component';
import { Windows10Component } from './windows10/windows10.component';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntuneComponent,
    ComplianceComponent,
    VulnerabilityComponent,
    Windows10Component,
    DashboardSettingsComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
