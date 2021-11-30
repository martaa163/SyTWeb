export class Jugador {
    nombre: string;
    apellido: string;
    nivel: string;
    partidasApuntado: Partida[];

    constructor(nombre:string, apellido: string, nivel:string){

        this.nombre = nombre;
        this.apellido = apellido;
        this.nivel = nivel;
        
}
   
}


import {Partida} from "./partida.model";
import {Deserializable} from "./deserializable.model";

export class Jugador implements Deserializable {
    nombre: string;
    apellido: string;
    nivel: string;
    partidasApuntado: Partida[];

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}

