import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';

import { DisenadorComponent } from './disenador/disenador.component';
import {SomosComponent} from './somos/somos.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    TodoComponent,DisenadorComponent,SomosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hola';
}
