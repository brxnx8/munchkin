import { Card } from "./carta";

export class Jogador {
    nome: string;
    nivel: number;
    classe: string;
    raca: string;
    forca: number;
    isUser: boolean;
    listaCartas: Card [];
    

    constructor({nome, nivel, classe, raca, forca, isUser}: Jogador) {
        this.nome = nome;
        this.nivel = nivel;
        this.classe = classe;
        this.raca = raca;
        this.forca = forca;
        this.isUser = isUser;
        this.listaCartas = [];
    }

    Lutar(cartaMonstro: Card){
        return (cartaMonstro.nivel <= this.forca)
    }

    setNivel(n: number){
        this.nivel += n;
    }

    setForca(n: number){
        this.forca += n;
    }
}