import { Pipe, PipeTransform } from '@angular/core';
import { superHero } from './superHeroe';

@Pipe({
  name: 'filtro',
  standalone: true,
})
export class FiltroPipe implements PipeTransform {
  transform(arreglo: Array<superHero>, objetivo: string): Array<superHero> {
    if (objetivo == '') return arreglo;

    let nuevo: Array<superHero> = [];

    for (let i of arreglo) {
      if (i.superNombre.toLowerCase().indexOf(objetivo.toLowerCase()) > -1)
        nuevo.push(i);
    }

    return nuevo;
  }
}
