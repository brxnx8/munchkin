
export class Card {
    name: string;
    description: string;
    imageCard: string;
    tipo: string;
    nivel: number;
    qtdTesouro: number;

    constructor({name, description, imageCard, tipo, nivel, qtdTesouro}: Card) {
        this.name = name;
        this.description = description;
        this.imageCard = imageCard;
        this.tipo = tipo;
        this.nivel = nivel;
        this.qtdTesouro = qtdTesouro;

        
    }
}