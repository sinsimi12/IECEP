import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: HeaderComponent,
  },
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [HeaderComponent],
})
export class HeaderModule {}
