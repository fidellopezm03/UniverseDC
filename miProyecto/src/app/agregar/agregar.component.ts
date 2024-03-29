import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { superHero } from '../superHeroe';
import { ServicioHeroService } from '../servicio-hero.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css',
})
export class AgregarComponent implements OnInit {
  miFormulario: FormGroup = new FormGroup({
    id: new FormControl(''),
    colorHero: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(7),
    ]),
    img: new FormControl('', [
      Validators.required,
      Validators.maxLength(10000),
    ]),
    imgHero: new FormControl('', [
      Validators.required,
      Validators.maxLength(10000),
    ]),
    superNombre: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    nombre: new FormControl('', [
      Validators.maxLength(50),
      Validators.minLength(5),
    ]),
    poderes: new FormArray([], Validators.required),
    debilidades: new FormArray([], Validators.required),
    peso: new FormControl('', [Validators.required, Validators.min(0.1)]),
    estatura: new FormControl('', [Validators.required, Validators.min(0.1)]),
    colorPelo: new FormControl(''),
    colorOjos: new FormControl(''),
    alias: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    residencia: new FormControl('', [
      Validators.required,

      Validators.maxLength(50),
    ]),
    afiliaciones: new FormControl('', [Validators.maxLength(50)]),
    enemigos: new FormArray([], [Validators.required]),
  });

  ngOnInit(): void {
    if (this.service.modificar) {
      this.miFormulario.patchValue(this.service.Hero);
      const Poderes = this.miFormulario.get('poderes') as FormArray;
      const Debilidades = this.miFormulario.get('debilidades') as FormArray;
      const Enemigos = this.miFormulario.get('enemigos') as FormArray;
      Poderes.clear();
      Debilidades.clear();
      Enemigos.clear();
      this.service.Hero.poderes.forEach((poder) => {
        Poderes.push(this.instancia.control(poder));
      });
      this.service.Hero.debilidades.forEach((debilidad) => {
        Debilidades.push(this.instancia.control(debilidad));
      });
      this.service.Hero.enemigos.forEach((enemigo) => {
        Enemigos.push(this.instancia.control(enemigo));
      });
    }
  }
  constructor(
    public service: ServicioHeroService,
    private instancia: FormBuilder
  ) {}

  get colorHero() {
    return this.miFormulario.get('colorHero') as FormControl;
  }
  get img() {
    return this.miFormulario.get('img') as FormControl;
  }
  get imgHero() {
    return this.miFormulario.get('imgHero') as FormControl;
  }
  get superNombre() {
    return this.miFormulario.get('superNombre') as FormControl;
  }
  get nombre() {
    return this.miFormulario.get('nombre') as FormControl;
  }
  get poderes(): any {
    return this.miFormulario.get('poderes') as FormControl;
  }
  get debilidades(): any {
    return this.miFormulario.get('debilidades') as FormControl;
  }
  get peso() {
    return this.miFormulario.get('peso') as FormControl;
  }
  get estatura() {
    return this.miFormulario.get('estatura') as FormControl;
  }
  get alias() {
    return this.miFormulario.get('alias') as FormControl;
  }
  get colorPelo() {
    return this.miFormulario.get('colorPelo') as FormControl;
  }
  get colorOjos() {
    return this.miFormulario.get('colorOjos') as FormControl;
  }
  get residencia() {
    return this.miFormulario.get('residencia') as FormControl;
  }
  get afiliaciones() {
    return this.miFormulario.get('afiliaciones') as FormControl;
  }
  get enemigos(): any {
    return this.miFormulario.get('enemigos') as FormControl;
  }

  AddFormArray(valor: string) {
    const referencia = this.miFormulario.get(valor) as FormArray;
    referencia.push(this.instancia.control('', [Validators.required]));
  }
  RemoveFormArray(valor: string) {
    const referencia = this.miFormulario.get(valor) as FormArray;
    referencia.removeAt(referencia.length - 1);
  }
  Guardar(): void {
    let nuevoHero: superHero = new superHero();
    nuevoHero = this.miFormulario.value;

    if (this.service.modificar) {
      this.service.put(nuevoHero);
      this.service.modificar = false;
    } else {
      this.service.post(nuevoHero);
      this.service.agregar = false;
    }
  }
}
