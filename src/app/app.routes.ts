import { Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { DisenadorComponent } from './disenador/disenador.component';
import { SomosComponent } from './somos/somos.component';

export const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'disenador', component: DisenadorComponent },
  {
    path: 'somos',
    loadComponent: () => import('./somos/somos.component').then(m => m.SomosComponent)
  }
];
