import { AbstractView, MouseEvent, useContext, useEffect, useReducer, useState } from "react";

import del from "../../assets/images/delete.svg";
import imgPorta from "../../assets/images/Door0.png";
import imgPortaAberta from "../../assets/images/Door1.png";
import imgAvatar from "../../assets/images/cpu-3m.png";
import imgBatle from "../../assets/images/btn-battle.png";
import imgRun from "../../assets/images/btn-run.png";
import emptyX from "../../assets/images/EmptyCardX.png";
import emptyO from "../../assets/images/EmptyCardO.png";

import { FugirGame } from "./components/finshGame";
import { CartaContext } from "../../contexts/CardContext";
import { MesaContext } from "../../contexts/MesaContext";
import { Card } from "../../models/carta";
import { Jogador } from "../../models/jogador";
import { ContainerGame } from "./style";


export function Game() {
    const { carta, setCarta } = useContext(CartaContext);
    const { mesa, setMesa } = useContext(MesaContext);
    const [Porta, setPorta] = useState(imgPorta);
    const [classPorta, setClassPorta] = useState("porta");
    const [imgDireita, setImgDireita] = useState(imgPorta);
    const [imgEsquerda, setImgEsquerda] = useState(imgPorta);
    const [displayFugir, setDisplayFugir] = useState("none");
    const [fineshedTurno, setFineshedTurno] = useState(false);
    const [fineshedGame, setFineshedGame] = useState(false);
    const [key, setKey] = useState(0);

    function AbrirPorta() {
        setPorta(imgPortaAberta);
        setTimeout(() => {
            setPorta(carta.imageCard);
            setClassPorta("portaCarta");
            if (carta.tipo == "Raça" || carta.tipo == "Classe") {
                addCartaMao(carta, mesa.player);
                setTimeout(() => {
                    setPorta(imgPorta);
                    setClassPorta("porta");
                    setFineshedTurno(true);
                }, 1200);
            }
            if (carta.tipo == "Maldição") {
                mesa.player.setForca(-1);
                setTimeout(() => {
                    setPorta(imgPorta);
                    setClassPorta("porta");
                    setFineshedTurno(true);
                }, 1200);
            }
        }, 1200);
    }

    function usarCarta(carta: Card){

        if(carta.tipo == "SubirDeNivel" && mesa.player.nivel >= 9){
            return
        }
        
        switch(carta.tipo){
            case  "SubirDeNivel":
                mesa.player.setNivel(1);                
                break;
            case "Poção":
                mesa.player.setForca(1);
                break;
            case "Raça":
                mesa.player.raca = carta.name;
                break;
            case "Classe":
                mesa.player.classe = carta.name;
                break;
            case "Equipamento":
                mesa.player.setForca(1);
                break;
            default:
                break;
            
        }        
        removerCarta(mesa.player, carta)
    }

    function removerCarta(player: Jogador, carta: Card){
        player.listaCartas.splice(player.listaCartas.indexOf(carta), 1);
        setKey((prevKey) => prevKey + 1);
    }

    function esperar(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

    async function bot(player: Jogador){
        
        player.listaCartas.forEach(elemento => {
            if(elemento.tipo != "Monstro"){
                setTimeout(()=>usarCarta(elemento), 3000);
            }
        });

        await esperar(6000)

        AbrirPorta();

        await esperar(6000)

        if(carta.tipo == "Monstro"){

            setTimeout(async () => {
                
                    if(carta.nivel <= player.nivel){
                        batle(carta, player);
                        await esperar(3000)
                    }else{
                        Fugir();
                        await esperar(2000)
                        setTimeout(() =>{
        
                            const resultado = Math.random() < 0.5 ? 0 : 1;
                            let imgElement = document.createElement("img");
        
                            if(resultado == 1){
                                imgElement = document.querySelector("#Direita")!;
                            }else{
                                imgElement = document.querySelector("#Esquerda")!;
                            }
                            
                            Sorteio(imgElement);
                        }, 2000)
                        await esperar(2000)
                    }
            }, 3500)
            await esperar(7000)
        }
            
        await esperar(3000)
        

        setTimeout(async ()=>{
            const cartasAMais = player.listaCartas.length - 5
            if(cartasAMais > 0){

                for(let i = 0; i < cartasAMais; i++){
                    const index = Math.floor(Math.random() * player.listaCartas.length);
                    const cartaUsar = player.listaCartas[index];
                    if(carta.tipo == "Monstro" || (cartaUsar.tipo == "SubirDeNivel" && player.nivel >= 9) ){
                        player.listaCartas.splice(index, 1);
                    }else{
                        usarCarta(cartaUsar)
                    }
                }
                
            }
            await esperar(2000)
            passarTurno();
        }, 1200)
    }

    useEffect(() => {

        isBot()
        
    }, [carta]);

    function isBot(){
        if(!mesa.player.isUser){
            bot(mesa.player, carta)
        }
    }

    function passarTurno() {
        if(mesa.player.listaCartas.length < 6){
            mesa.nextPlayer();
            setFineshedTurno(false);
            setCarta(mesa.baralhoPorta.PuxarCarta());
        }else{
            window.alert("precisa descartar ou usar cartas")
        }
    }

    function addCartaMao(carta: Card, player: Jogador) {
        player.listaCartas.push(carta);
    }

    function Perdeu(player: Jogador) {
        player.setNivel(-player.nivel + 1);
        player.setForca(-player.forca + 1);
    }

    function batle(carta: Card, player: Jogador) {
        const playerWin = player.Lutar(carta);
        if (playerWin) {
            for (let i = 0; i < carta.qtdTesouro; i++) {
                const cartaBau = mesa.baralhoTesouro.PuxarCarta();
                player.listaCartas.push(cartaBau);
                player.setNivel(1);
                player.setForca(1);
            }
        } else {
            Perdeu(player);
        }
        setPorta(imgPorta);
        setClassPorta("porta");
        setFineshedTurno(true);
    }

    function Sorteio(e: MouseEvent<HTMLImageElement, globalThis.MouseEvent> | HTMLImageElement) {
        let lado  = "Direita"
        if(e.tagName == "IMG"){
            e.src = imgPortaAberta;
    
            lado = e.classList[1];
        }else{
            e.target.src = imgPortaAberta;
    
            lado = e.target.classList[1];  
            
        }



        setTimeout(function () {
            const resultado = Math.random() < 0.5 ? 0 : 1;
            if (resultado == 1) {
                setImgDireita(emptyO);
                setImgEsquerda(emptyX);
                if (lado != "Direita") {
                    console.log("nao fugiu");
                    Perdeu(mesa.player);
                }
            } else {
                setImgDireita(emptyX);
                setImgEsquerda(emptyO);
                if (lado != "Esquerda") {
                    console.log("nao fugiu");
                    Perdeu(mesa.player);
                }
            }
            setTimeout(function () {
                setDisplayFugir("none");
                setPorta(imgPorta);
                setClassPorta("porta");
                setImgDireita(imgPorta);
                setImgEsquerda(imgPorta);
                setFineshedTurno(true);
            }, 1200);
        }, 1000);
    }

    function Fugir() {
        setDisplayFugir("flex");
    }

    function acabaJogo() {
        if (mesa.player.nivel >= 10) {
            setFineshedGame(true);
        }
    }

    return (
        <ContainerGame onLoad={() => {
            acabaJogo();
        }}>
            {fineshedGame && (
                <div id="Acabou">
                    <h1>Acabou, o {mesa.player.nome} ganhou</h1>
                </div>
            )}

            {fineshedTurno && (
                <div className="divAvançar" onClick={passarTurno}>
                    <h1>Encerrar Turno</h1>
                </div>
            )}
            <img
                src={Porta}
                className={classPorta}
                onClick={
                    classPorta != "portaCarta" && !fineshedTurno
                        ? AbrirPorta
                        : undefined
                }
            />
            {classPorta == "portaCarta" && carta.tipo == "Monstro" && (
                <>
                    <div className="porta" id="btnPorta">
                        <img
                            src={imgBatle}
                            onClick={() => batle(carta, mesa.player)}
                        />
                        <img src={imgRun} onClick={Fugir} />
                    </div>
                    <FugirGame
                        display={displayFugir}
                        text="Ache a Carta com Circulo para fugir"
                    >
                        <div className="divImgFugir">
                            <img
                                src={imgEsquerda}
                                onClick={(e) => Sorteio(e)}
                                className="imgCartaFugir Esquerda"
                                id="Esquerda"
                            />
                            <img
                                src={imgDireita}
                                onClick={(e) => Sorteio(e)}
                                className="imgCartaFugir Direita"
                                id="Direita"
                            />
                        </div>
                    </FugirGame>
                </>
            )}
            {mesa.listaJogadores.map((jogador, index) => {
                return (
                    <div
                        className={
                            jogador.isUser && index == 0
                                ? `bot0ContainerDetails ${
                                      jogador == mesa.player && "currentPlayer"
                                  }`
                                : `bot${index}ContainerDetails ${
                                      jogador == mesa.player && "currentPlayer"
                                  }`
                        }
                        key={index}
                    >
                        <div className="conatinerPlayer">
                            <div className="containerDetailsPlayer">
                                <img src={imgAvatar} className="imgAvatar" />
                                <div className="divDetailsText">
                                    <h1>{jogador.nome}</h1>
                                    <h2>Nivel: {jogador.nivel}</h2>
                                    <h2>Força: {jogador.forca}</h2>
                                    <h2>Raça: {jogador.raca}</h2>
                                    <h2>Classe: {jogador.classe}</h2>
                                </div>
                            </div>

                            {jogador.isUser ? (
                                <div className="containerCardsUser" key={key}>
                                    {jogador.listaCartas.map(
                                        (elemento, index) => {
                                            return (
                                                <div key={index}>
                                                    {
                                                        mesa.player.isUser && (
                                                            <img
                                                                src={del}
                                                                className={"close"}
                                                                onClick={() => removerCarta(jogador, elemento)}
                                                            />
                                                        )
                                                    }
                                                    <p className="CardType">
                                                        {elemento.tipo}
                                                    </p>
                                                    
                                                    {[
                                                        "Raça",
                                                        "Classe",
                                                        "SubirDeNivel",
                                                        "Equipamento",
                                                        "Poção",
                                                    ].includes(
                                                        elemento.tipo
                                                    ) && mesa.player.isUser ? (
                                                        <figure className="CartaLegenda">
                                                            <img
                                                                src={
                                                                    elemento.imageCard
                                                                }
                                                                className="cardUser useCarta"
                                                            />
                                                            <figcaption onClick={()=>usarCarta(elemento)}>
                                                                <h1>
                                                                    Usar Carta
                                                                </h1>
                                                            </figcaption>
                                                        </figure>
                                                    ) : (
                                                        <img
                                                            src={
                                                                elemento.imageCard
                                                            }
                                                            className="cardUser"
                                                        />
                                                    )}
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            ) : (
                                <div>
                                    <h1>
                                        Cartas: {jogador.listaCartas.length}
                                    </h1>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </ContainerGame>
    );
}
