import { Card } from "./carta";

export class Jogador {
    nome: string;
    nivel: number;
    classe: string;
    raca: string;
    forca: number;
    isUser: boolean;
    qtdCartas: number;
    

    constructor({nome, nivel, classe, raca, forca, isUser, qtdCartas}: Jogador) {
        this.nome = nome;
        this.nivel = nivel;
        this.classe = classe;
        this.raca = raca;
        this.forca = forca;
        this.isUser = isUser;
        this.qtdCartas = qtdCartas;
    }

    Lutar(cartaMonstro: Card){
        return (cartaMonstro.nivel <= this.forca)
    }

    Fugir(){
        return 
    }

    setNivel(n: number){
        this.nivel += n;
    }

    setForca(n: number){
        this.forca += n;
    }
}