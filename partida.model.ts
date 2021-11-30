import {Jugador} from "./jugador.model";


export class Partida { 
    lugar: string;
    nivel: string;
    horario: string;
    jugador1: Jugador;
    jugador2: Jugador;
    jugador3: Jugador;
    jugador4: Jugador;

 constructor(lugar:string, nivel: string, horario:string,jugador1: Jugador, jugador2: Jugador, jugador3: Jugador, jugador4: Jugador){

    this.lugar = lugar;
    this.nivel = nivel;
    this.horario = horario;
    this.jugador1 = jugador1;
    this.jugador2 = jugador2;
    this.jugador3 = jugador3;
    this.jugador4 = jugador4;
    
}

}

import {Deserializable} from "./deserializable.model";

export class Partida implements Deserializable {
    lugar: string;
    nivel: string;
    horario: string;
    jugador: Jugador;
    
   constructor(lugar:string, nivel: string, horario:string,jugador: Jugador){

    this.lugar = lugar;
    this.nivel = nivel;
    this.horario = horario;
    this.jugador = jugador;
    }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

class listaPartidas{
    partidas: Partida[];
    
    constructor(){
        this.partidas=[// news de partidas];
    }
}
}
