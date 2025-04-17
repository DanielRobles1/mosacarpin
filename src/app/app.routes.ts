import { Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { DisenadorComponent } from './disenador/disenador.component';

export const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'disenador', component: DisenadorComponent },
];
