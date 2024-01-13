import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { ServicioHeroService } from './servicio-hero.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NgxUiLoaderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'UniverseDC';

  constructor(private location: Location, public service: ServicioHeroService) {
    this.location.subscribe((event) => {
      this.service.mostrarSuperior = false;
    });
  }
}
