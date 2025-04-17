import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  tiposMueble = ['Silla', 'Mesa', 'Ropero'];
  materiales = ['Madera', 'MDF', 'Melamina'];
  acabados = ['Barnizado', 'Pintado', 'Natural'];

  seleccion = {
    tipo: '',
    material: '',
    acabado: ''
  };

  resultado = '';
  dropdownOpen: string | null = null;

  toggleDropdown(dropdown: string) {
    this.dropdownOpen = this.dropdownOpen === dropdown ? null : dropdown;
  }

  seleccionarTipo(tipo: string) {
    this.seleccion.tipo = tipo;
    this.dropdownOpen = null;
  }

  seleccionarMaterial(material: string) {
    this.seleccion.material = material;
    this.dropdownOpen = null;
  }

  seleccionarAcabado(acabado: string) {
    this.seleccion.acabado = acabado;
    this.dropdownOpen = null;
  }

  disenarMueble() {
    if (this.seleccion.tipo && this.seleccion.material && this.seleccion.acabado) {
      this.resultado = `Has diseñado un(a) ${this.seleccion.tipo} de ${this.seleccion.material} con acabado ${this.seleccion.acabado}.`;
    } else {
      this.resultado = 'Por favor selecciona todas las opciones.';
    }
  }

 
  }