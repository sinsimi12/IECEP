//Module
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components

import { RegisterComponent } from './register.component';

//Routes

const routes: Routes = [{ path: '', component: RegisterComponent }];

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RegisterComponent],
})
export class RegisterModule {}
