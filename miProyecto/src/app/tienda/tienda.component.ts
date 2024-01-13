import { Component } from '@angular/core';
import { ServicioHeroService } from '../servicio-hero.service';
@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css',
})
export class TiendaComponent {
  constructor(public service: ServicioHeroService) {
    this.service.colorSuperior = '#00FF00';
    this.service.mostrarSuperior = true;
    this.service.valorActivo = 'Tienda';
  }
}
