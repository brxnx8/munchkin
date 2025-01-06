import { Card } from "./carta";
import { Jogador } from "./jogador";

export class CartaNaMao {
    jogador: Jogador;
    carta: Card;

    constructor(jogador: Jogador, carta: Card) {
        this.jogador = jogador;
        this.carta = carta;
        
    }
}