export class superHero {
  public id: string = '';
  public colorHero: string;
  public img: string;
  public imgHero: string;
  public superNombre: string;
  public nombre: string;
  public poderes: Array<string>;
  public debilidades: Array<string>;
  public peso: number;
  public estatura: number;
  public colorPelo: string;
  public colorOjos: string;
  public alias: string;
  public residencia: string;
  public afiliaciones: string;
  public enemigos: Array<string>;

  constructor(
    colorHero: string = '',
    img: string = '',
    imgHero: string = '',

    superNombre: string = '',
    nombre: string = '',
    poderes: Array<string> = [],
    debilidades: Array<string> = [],
    peso: number = 0,
    estatura: number = 0,
    colorPelo: string = '',
    colorOjos: string = '',
    alias: string = '',
    residencia: string = '',
    afiliaciones: string = '',
    enemigos: Array<string> = []
  ) {
    this.colorHero = colorHero;
    this.img = img;
    this.imgHero = imgHero;

    this.superNombre = superNombre;
    this.nombre = nombre;
    this.poderes = poderes;
    this.debilidades = debilidades;
    this.peso = peso;
    this.estatura = estatura;
    this.colorPelo = colorPelo;
    this.colorOjos = colorOjos;
    this.alias = alias;
    this.residencia = residencia;
    this.afiliaciones = afiliaciones;
    this.enemigos = enemigos;
  }
}
