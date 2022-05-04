import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/landing/landing.module').then(
        (m) => m.LandingModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./components/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./components/header/header.module').then((m) => m.HeaderModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LogInModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
