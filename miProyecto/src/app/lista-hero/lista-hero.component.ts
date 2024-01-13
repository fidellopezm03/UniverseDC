import { Component } from '@angular/core';
import { DetallesHeroComponent } from '../detalles-hero/detalles-hero.component';
import { ServicioHeroService } from '../servicio-hero.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from '../agregar/agregar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-hero',
  standalone: true,
  imports: [
    DetallesHeroComponent,
    FormsModule,
    CommonModule,
    AgregarComponent,
    RouterLink,
  ],
  templateUrl: './lista-hero.component.html',
  styleUrl: './lista-hero.component.css',
})
export class ListaHeroComponent {
  index: number = -1;
  objetivo: string = '';

  constructor(public service: ServicioHeroService) {
    this.service.colorSuperior = '#b300b3';
    this.service.mostrarSuperior = true;
    this.service.valorActivo = 'Héroes';
  }
  Transmitir(index: number): void {
    this.index = index;
  }
  Actualizar(): void {
    this.service.Actualizar(this.objetivo);
  }
}
