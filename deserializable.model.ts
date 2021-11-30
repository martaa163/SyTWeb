

export interface Deserializable {
    deserialize(input: any): this;
    this.partidasApuntado = new Partida().deserialize(input.partidasApuntado); 
    this.jugador = new Jugador().deserialize(input.jugador); 
    return this;
  }
