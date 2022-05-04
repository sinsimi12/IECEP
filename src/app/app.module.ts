//Module
import { LogInModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { AboutModule } from './components/about/about.module';
import { LandingModule } from './components/landing/landing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './components/header/header.module';
import { AppRoutingModule } from './app-routing.module';

//Components

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LandingModule,
    HeaderModule,
    AboutModule,
    LogInModule,
    RegisterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
