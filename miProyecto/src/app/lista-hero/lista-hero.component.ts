import { Component } from '@angular/core';
import { DetallesHeroComponent } from '../detalles-hero/detalles-hero.component';
import { ServicioHeroService } from '../servicio-hero.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from '../agregar/agregar.component';
import { RouterLink } from '@angular/router';
import { FiltroPipe } from '../filtro.pipe';

@Component({
  selector: 'app-lista-hero',
  standalone: true,
  imports: [
    DetallesHeroComponent,
    FormsModule,
    CommonModule,
    AgregarComponent,
    RouterLink,
    FiltroPipe,
  ],
  templateUrl: './lista-hero.component.html',
  styleUrl: './lista-hero.component.css',
})
export class ListaHeroComponent {
  id: string = '';
  objetivo: string = '';

  constructor(public service: ServicioHeroService) {
    this.service.colorSuperior = '#b300b3';
    this.service.mostrarSuperior = true;
    this.service.valorActivo = 'Héroes';
  }
  Transmitir(id: string): void {
    this.id = id;
    this.service.mostrarDetalles = true;
  }
}
