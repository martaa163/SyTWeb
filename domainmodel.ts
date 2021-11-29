

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Users } from "./app.model";
 
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

// para añadir:
// let jugador = new Jugador("Tacoronte", "medio","Viernes 15 noviembre a las 17h");