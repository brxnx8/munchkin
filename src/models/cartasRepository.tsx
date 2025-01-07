import { Card } from "./carta";

export class CartasRepository {
    cartas: Card[];

    tiposPorta: string[];
    tiposTesouro: string[];
    
    constructor() {
        this.cartas = [];
        this.tiposPorta = ["Raça", "Classe", "Maldição", "Monstro"];
        this.tiposTesouro = ["SubirDeNivel", "Equipamento", "Poção"];
    }


    async loadData(path: string) {
        const response = await fetch(`${path}`);
        const data = await response.json();
        data.forEach((element: Card) => {
            this.createCard(element);
        });
    }

    createCard(card: Card) {
        const carta = new Card(
            {
                name: card['name'],
                description: card['description'],
                imageCard: card['imageCard'],
                nivel: card['nivel'],
                qtdTesouro: card['qtdTesouro'],
                tipo: card['tipo']
            });
        this.cartas.push(carta)
    }

    filtraCartas(isPorta: boolean){
        const tipoFiltro = isPorta  ? this.tiposPorta : this.tiposTesouro;
        const cartasFiltradas = this.cartas.filter(element => tipoFiltro.includes(element.tipo))
        return cartasFiltradas;
    }


}
