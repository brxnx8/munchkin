import { CartaNaMao } from "./cartaNaMao";
import { CartasRepository } from "./cartasRepository";
import { Deck } from "./deck";
import { Jogador } from "./jogador";

export class Mesa {
    player: Jogador;
    nomeCartaJogada: string;
    baralhoPorta: Deck;
    baralhoTesouro: Deck;
    listaJogadores: Jogador[];
    listaCartasNaMao: CartaNaMao[]


    constructor(listaJogadores: Jogador[], player: Jogador) {
        this.nomeCartaJogada = '';
        this.baralhoPorta = {} as Deck;
        this.baralhoTesouro = {} as Deck;
        this.listaJogadores = listaJogadores;
        this.listaCartasNaMao = [];
        this.player = player
    }

    async Main(){
        const data_path = "src/assets/dataCards/cards.json";
    
        const repository = new CartasRepository();
        
        await repository.loadData(data_path);

        this.baralhoPorta = new Deck(repository.filtraCartas(true));
        this.baralhoTesouro = new Deck(repository.filtraCartas(false));

        this.baralhoPorta.Embaralhar();
        this.baralhoTesouro.Embaralhar();
        
        this.DistribuirCartas()

    }

    DistribuirCartas(){
        this.listaJogadores.forEach((element: Jogador) => {
            for(let c = 1; c <= 2; c++){
                const CartaPorta = this.baralhoPorta.PuxarCarta();
                const CartaTesouro = this.baralhoTesouro.PuxarCarta();
                element.listaCartas.push(CartaPorta);
                element.listaCartas.push(CartaTesouro);

            }
        })
    }

    nextPlayer(){
        let currentIndex = this.listaJogadores.findIndex(element => element == this.player)
        if (currentIndex == this.listaJogadores.length - 1) {
            currentIndex = -1
        }
        this.player = this.listaJogadores[currentIndex+1]
    }

   
}