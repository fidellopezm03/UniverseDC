import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class DetallesHeroComponent implements OnChanges {
  @Input() id: string = '';

  constructor(public service: ServicioHeroService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.service.getHero(this.id);
  }
  Eliminar(): void {
    this.service.delete(this.id);
  }
}
