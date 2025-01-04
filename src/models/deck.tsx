import { Card } from "./carta";

export class Deck {
    cartas: Card[];

    constructor(cartas: Card[]) {
        this.cartas = cartas;
    }

    Embaralhar() {
        this.cartas.sort(() => Math.random() - 0.5);
    }

    PuxarCarta(): Card {
        return this.cartas.pop()!;
    }
}
