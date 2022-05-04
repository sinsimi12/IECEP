//Module
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components

import { LandingComponent } from './landing.component';

//Routes

const routes: Routes = [{ path: '', component: LandingComponent }];

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [LandingComponent],
})
export class LandingModule {}
