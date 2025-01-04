
export class Jogador {
    nome: string;
    nivel: number;
    classe: string;
    raca: string;
    forca: number;
    isUser: boolean;
    

    constructor({nome, nivel, classe, raca, forca, isUser}: Jogador) {
        this.nome = nome;
        this.nivel = nivel;
        this.classe = classe;
        this.raca = raca;
        this.forca = forca;
        this.isUser = isUser
    }
}