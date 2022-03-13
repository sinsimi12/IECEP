//Module
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

//Components

import { AboutComponent } from './about.component';

//Routes or Pathing

const routes: Routes = [{ path: '', component: AboutComponent }];

//Ng Module

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, BrowserModule, RouterModule.forChild(routes)],
})
export class AboutModule {}
