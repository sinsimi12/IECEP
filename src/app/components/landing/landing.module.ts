//Module
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

//Components

import { LandingComponent } from './landing.component';
//import { ContactComponent } from './components/contact/contact.component';
//import { AboutComponent } from './components/about/about.component';

//Routes or Pathing

const routes: Routes = [{ path: '', component: LandingComponent }];

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, BrowserModule, RouterModule.forChild(routes)],
})
export class LandingModule {}
