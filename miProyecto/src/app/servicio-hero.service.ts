import { Injectable } from '@angular/core';
import { superHero } from './superHeroe';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicioHeroService {
  Heroes: Array<superHero> = [];
  colorSuperior: string = '#2b2b2b';
  valorActivo: string = '';
  mostrarSuperior: boolean = false;
  constructor(private http: HttpClient) {
    this.getHeroes();
  }
  getHeroes(): void {
    this.http
      .get<superHero[]>('http://localhost:3000/Heroes')
      .subscribe((res) => {
        this.Heroes = res;
      });
  }

  delete(i: string, j: number): void {
    this.http
      .delete<superHero[]>('http://localhost:3000/Heroes/' + i)
      .subscribe((res) => {
        this.getHeroes();
      });
  }
  post(Heroe: superHero): void {
    Heroe.id = this.generateUuid();
    this.http
      .post<superHero>('http://localhost:3000/Heroes', Heroe)
      .subscribe((res) => {
        this.Heroes.push(res);
      });
  }
  put(Heroe: superHero, i: number): void {
    this.http
      .put<superHero[]>('http://localhost:3000/Heroes/' + Heroe.id, Heroe)
      .subscribe((res) => {
        this.Heroes[i] = Heroe;
      });
  }

  Actualizar(objetivo: string): void {
    if (objetivo == '') this.getHeroes();
    else {
      let nuevo: Array<superHero> = [];

      for (let i of this.Heroes) {
        if (i.superNombre.toLowerCase().indexOf(objetivo.toLowerCase()) > -1)
          nuevo.push(i);
      }

      this.Heroes = nuevo;
    }
  }
  generateUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
