import { Routes } from '@angular/router';
import { ListaHeroComponent } from './lista-hero/lista-hero.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ComicsComponent } from './comics/comics.component';
import { InicioComponent } from './inicio/inicio.component';
import path from 'path';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'comics', component: ComicsComponent },
  {
    path: 'lista-hero',
    component: ListaHeroComponent,
  },
];
