//Module
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

//Components

import { ContactComponent } from './contact.component';

//Routes or Pathing

const routes: Routes = [{ path: '', component: ContactComponent }];

//Ng Modules

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, BrowserModule, RouterModule.forChild(routes)],
