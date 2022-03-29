//Module

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './components/header/header.module';
import { AppRoutingModule } from './app-routing.module';

//Components

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,
    HttpClientModule, HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
