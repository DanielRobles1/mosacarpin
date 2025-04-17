import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disenador',
  templateUrl: './disenador.component.html',
  styleUrls: ['./disenador.component.css'],
  standalone: true,
  imports: [CommonModule],  // Importar CommonModule para usar ngIf
})
export class DisenadorComponent {
  resultado = '';
  imagenGenerada = '';

  private formatear(valor: string): string {
    return valor.toLowerCase().replace(/\s+/g, '_');
  }

  crearMueble() {
    const tipo = (document.querySelector('input[name="tipo"]:checked') as HTMLInputElement)?.value;
    const madera = (document.querySelector('input[name="madera"]:checked') as HTMLInputElement)?.value;
    const acabado = (document.querySelector('input[name="acabado"]:checked') as HTMLInputElement)?.value;
    const pigmento = (document.querySelector('input[name="pigmento"]:checked') as HTMLInputElement)?.value;

    // Verificar que todas las opciones estén seleccionadas
    if (tipo && madera && acabado && pigmento) {
      // Formatear el nombre de la imagen
      const nombreImagen = `${this.formatear(tipo)}_${this.formatear(madera)}_${this.formatear(acabado)}_${this.formatear(pigmento)}.png`;

      // Asignar la ruta de la imagen
      this.imagenGenerada = `/assets/${nombreImagen}`;

      console.log('Ruta de la imagen generada:', this.imagenGenerada); // Verificar en la consola
      
      // Mostrar el mensaje de resultado
      this.resultado = `Has diseñado un(a) ${tipo} de ${madera}, acabado ${acabado} y pigmentación ${pigmento}.`;
      console.log('Ruta de la imagen generada:', this.imagenGenerada);
    } else {
      this.resultado = 'Por favor selecciona todas las opciones.';
      this.imagenGenerada = '';  // Limpiar la imagen si falta alguna opción
    }
  }
}
