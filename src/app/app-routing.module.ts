import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './views/counter/counter.component';

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
  },
  {
    path: 'counter',
    component: CounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
