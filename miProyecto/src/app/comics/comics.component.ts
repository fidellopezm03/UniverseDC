import { Component } from '@angular/core';
import { ServicioHeroService } from '../servicio-hero.service';
@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [],
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css',
})
export class ComicsComponent {
  constructor(public service: ServicioHeroService) {
    this.service.colorSuperior = '#00ffff';
    this.service.mostrarSuperior = true;
    this.service.valorActivo = 'Comics';
  }
}
