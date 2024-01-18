import { Injectable } from '@angular/core';
import { superHero } from './superHeroe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicioHeroService {
  Heroes: Array<superHero> = [];
  Hero: superHero = new superHero();
  colorSuperior: string = '';
  valorActivo: string = '';
  mostrarSuperior: boolean = false;
  modificar: boolean = false;
  agregar: boolean = false;
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
  getHero(id: string): void {
    this.http
      .get<superHero>('http://localhost:3000/Heroes/' + id)
      .subscribe((res) => {
        this.Hero = res;
      });
  }

  delete(i: string): void {
    this.http
      .delete<superHero>('http://localhost:3000/Heroes/' + i)
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
  put(Heroe: superHero): void {
    this.http
      .put<superHero>('http://localhost:3000/Heroes/' + Heroe.id, Heroe)
      .subscribe((res) => {
        this.Hero = res;
        this.getHeroes();
      });
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
