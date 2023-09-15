export class Piloto {

  id: number;
  nombre: string;
  altura: number;
  peso: number;
  sexo: string;

  public constructor(
    id: number,
    nombre: string,
    altura: number,
    peso: number,
    sexo: string
    ){
    this.id = id;
    this.nombre = nombre;
    this.altura = altura;
    this.peso = peso;
    this.sexo = sexo;
    }

}
