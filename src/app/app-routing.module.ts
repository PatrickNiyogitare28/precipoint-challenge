import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'courses',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'courses',
    children: [
      {
        path: '',
        loadChildren: () => import('./views/courses/coures-routing.module').then(module => module.CoursesRoutingModule)
      }
    ]
  },
  {
    path: 'agendas',
    children: [
      {
        path: '',
        loadChildren: () => import('./views/agendas/agenda-routing.module').then(module => module.AgendasRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
