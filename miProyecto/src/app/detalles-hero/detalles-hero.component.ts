import { Component, Input } from '@angular/core';
import { ServicioHeroService } from '../servicio-hero.service';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from '../agregar/agregar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalles-hero',
  standalone: true,
  imports: [CommonModule, AgregarComponent, RouterLink],
  templateUrl: './detalles-hero.component.html',
  styleUrl: './detalles-hero.component.css',
})
export class DetallesHeroComponent {
  @Input() indice: number = -1;
  modificar: boolean = false;
  constructor(public service: ServicioHeroService) {}
  Eliminar(): void {
    this.service.delete(this.service.Heroes[this.indice].id, this.indice);
  }
  Capturar(respuesta: boolean): void {
    this.modificar = respuesta;
  }
  alerta() {
    alert(this.modificar);
  }
}
