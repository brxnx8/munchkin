
export class Card {
    name: string;
    description: string;
    imageCard: string;
    tipo: string;

    constructor(card: Card) {
        this.name = card['name'];
        this.description = card['description'];
        this.imageCard = card['imageCard'];
        this.tipo = card['tipo'];
    }
}