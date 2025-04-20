import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disenador',
  templateUrl: './disenador.component.html',
  styleUrls: ['./disenador.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DisenadorComponent {
  resultado = '';
  imagenGenerada = '';
  tipoSeleccionado = ''; // Guardamos el tipo actual

  seleccionarTipo(tipo: string) {
    this.tipoSeleccionado = tipo;
  }

  private formatear(valor: string): string {
    return valor.toLowerCase().replace(/\s+/g, '_');
  }

  crearMueble() {
    const tipo = (document.querySelector('input[name="tipo"]:checked') as HTMLInputElement)?.value;
    const madera = (document.querySelector('input[name="madera"]:checked') as HTMLInputElement)?.value;
    const acabado = (document.querySelector('input[name="acabado"]:checked') as HTMLInputElement)?.value;

    // Pigmento solo si es mesa
    let pigmento = 'sin pigmento';
    if (tipo === 'Mesa') {
      pigmento = (document.querySelector('input[name="pigmento"]:checked') as HTMLInputElement)?.value;
      if (!pigmento) {
        this.resultado = 'Por favor selecciona una pigmentación.';
        this.imagenGenerada = '';
        return;
      }
    }

    if (tipo && madera && acabado) {
      const nombreImagen = `${this.formatear(tipo)}_${this.formatear(madera)}_${this.formatear(acabado)}_${this.formatear(pigmento)}.png`;
      this.imagenGenerada = `/assets/${nombreImagen}`;
      this.resultado = `Has diseñado un(a) ${tipo} de ${madera}, acabado ${acabado}${tipo === 'Mesa' ? ` y pigmentación ${pigmento}` : ''}.`;
    } else {
      this.resultado = 'Por favor selecciona todas las opciones.';
      this.imagenGenerada = '';
    }
  }
}
