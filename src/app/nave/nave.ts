import { Piloto } from "../piloto/piloto";

export class Nave {

  /**
   * Esta clase representa a las naves del inventario.
   */

    id: number;
    nombre: string;
    modelo: string;
    costo: number;
    velocidad: number;
    capacidadCarga: number;
    capacidadPasajeros: number;
    pilotos: Array<Piloto>;

    public constructor(
        id: number,
        nombre: string,
        modelo: string,
        costo: number,
        velocidad: number,
        capacidadCarga: number,
        capacidadPasajeros: number,
        pilotos: Array<Piloto>
        ){
        this.id = id;
        this.nombre = nombre;
        this.modelo = modelo;
        this.costo = costo;
        this.velocidad = velocidad;
        this.capacidadCarga = capacidadCarga;
        this.capacidadPasajeros = capacidadPasajeros;
        this.pilotos = pilotos;
      }

}
