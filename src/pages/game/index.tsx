import { MouseEvent, useContext, useState } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import imgPorta from "../../assets/images/Door0.png"
import imgPortaAberta from "../../assets/images/Door1.png"
import imgAvatar from "../../assets/images/cpu-3m.png"
import imgBatle from "../../assets/images/btn-battle.png"
import imgRun from "../../assets/images/btn-run.png"
import empty from "../../assets/images/EmptyCard.jpeg"
import emptyX from "../../assets/images/EmptyCardX.png"
import emptyO from "../../assets/images/EmptyCardO.png"

import { FugirGame } from "./components/finshGame";

import { ContainerGame } from "./style";
import { MesaContext } from "../../contexts/MesaContext";
import { Card } from "../../models/carta";
import { Jogador } from "../../models/jogador";
import { CartaNaMao } from "../../models/cartaNaMao";
import { Button } from "../home/components/button";


export function Game() {

    const { player, setPlayer } = useContext(PlayerContext);
    const { mesa, setMesa } = useContext(MesaContext);
    const [Porta, setPorta] = useState(imgPorta);
    const [classPorta, setClassPorta] = useState("porta");
    const [carta, setCarta] = useState(mesa.baralhoPorta.PuxarCarta());
    const [imgDireita, setImgDireita] = useState(imgPorta);
    const [imgEsquerda, setImgEsquerda] = useState(imgPorta);
    const [displayFugir, setDisplayFugir] = useState("none")
    const [fineshedTurno, setFineshedTurno] = useState(false)
    const [fineshedGame, setFineshedGame] = useState(false)


    function AbrirPorta() {
        setPorta(imgPortaAberta);
        setTimeout(() => {
            setPorta(carta.imageCard)
            setClassPorta("portaCarta")
            if(carta.tipo == 'Raça' || carta.tipo == "Classe"){
                addCartaMao(carta, mesa.player)
                setTimeout(()=>{

                    setPorta(imgPorta);
                    setClassPorta('porta');
                    setFineshedTurno(true);
                }, 1200)
            }
            if(carta.tipo == 'Maldição'){
                mesa.player.setForca(-1);
                setTimeout(()=>{

                    setPorta(imgPorta);
                    setClassPorta('porta');
                    setFineshedTurno(true);
                }, 1200)
            }
        }, 1200);
       

    }

    function passarTurno(){
        mesa.nextPlayer();
        setPlayer(mesa.player);
        setFineshedTurno(false);
        setCarta(mesa.baralhoPorta.PuxarCarta());
    }
   
    function addCartaMao(carta: Card, player: Jogador){
        player.listaCartas.push(carta);
    }

    function Perdeu(player: Jogador){
        player.setNivel(-(player.nivel)+1);
        player.setForca(-(player.forca)+1);
    }

    function batle(carta: Card, player: Jogador){
        const playerWin = player.Lutar(carta);
        if (playerWin) {
            for(let i = 0; i < carta.qtdTesouro; i++){
                const cartaBau = mesa.baralhoTesouro.PuxarCarta();
                player.listaCartas.push(cartaBau);
                player.setNivel(1)
                player.setForca(1)
            }
        }else{
            Perdeu(player)
        }
        setPorta(imgPorta);
        setClassPorta('porta');
        setFineshedTurno(true);
    }

    function Sorteio(e: MouseEvent<HTMLImageElement, globalThis.MouseEvent>){

       e.target.src = imgPortaAberta;


       const lado = e.target.classList[1]

       setTimeout(function() {

            const resultado = Math.random() < 0.5 ? 0 : 1;
            if(resultado == 1){
                setImgDireita(emptyO);
                setImgEsquerda(emptyX);
                if(lado == "Direita"){
                    console.log("fugiu")
                }else{
                    console.log("nao fugiu")
                    Perdeu(mesa.player)
                }
            }else{
                setImgDireita(emptyX);
                setImgEsquerda(emptyO);
                if(lado == "Esquerda"){
                    console.log("fugiu")
                }else{
                    console.log("nao fugiu")
                    Perdeu(mesa.player)
                }
            }
            setTimeout(function (){
                setDisplayFugir('none');
                setPorta(imgPorta);
                setClassPorta('porta');
                setImgDireita(imgPorta);
                setImgEsquerda(imgPorta);
            }, 2000)
           setFineshedTurno(true);
        }, 1000)

    }

    function Fugir(){
       setDisplayFugir('flex')
    }

    function acabaJogo(){
        if(mesa.player.nivel >= 10){
            setFineshedGame(true);
        }
    }


    return (
        <ContainerGame onLoad={acabaJogo}>
            {
                fineshedGame && (
                    <div id="Acabou">
                        <h1>Acabou, o {mesa.player.nome} ganhou</h1>
                    </div>
                )
            }


            {fineshedTurno && (
                <div className="divAvançar" onClick={passarTurno}>
                    <h1>Encerrar Turno</h1>
                </div>
            )}
            <img src={Porta} className={classPorta} onClick={classPorta != "portaCarta" && !fineshedTurno ? AbrirPorta : undefined}/>
            {classPorta == "portaCarta" && carta.tipo == "Monstro" && (
                            
                                    <>
                                        <div className="porta" id="btnPorta">
                                            <img src={imgBatle} onClick={() => batle(carta, mesa.player)}/>
                                            <img src={imgRun} onClick={Fugir}/>
                                        </div>
                                        <FugirGame
                                            display={displayFugir}
                                            text="Ache a Carta com Circulo para fugir"
                                        >
                                            <div className="divImgFugir">
                                                <img src={imgEsquerda} onClick={(e) => Sorteio(e)} className="imgCartaFugir Esquerda"/>
                                                <img src={imgDireita} onClick={(e) => Sorteio(e)} className="imgCartaFugir Direita"/>
                                            </div>
                                        </FugirGame>
                                            
                                    
                                            
                                        
                                    </>



            )   
            }
            {mesa.listaJogadores.map( (jogador, index) => {

                return(
                    <div className={jogador.isUser && index==0 ? `bot0ContainerDetails ${jogador == mesa.player && 'currentPlayer'}` : `bot${index}ContainerDetails ${jogador == mesa.player && 'currentPlayer'}`} key={index}>
                        <div className="conatinerPlayer">
                            <div className="containerDetailsPlayer">

                                <img src={imgAvatar} className="imgAvatar"/>
                                <div className="divDetailsText">
                                    <h1>{jogador.nome}</h1>
                                    <h2>Nivel: {jogador.nivel}</h2>
                                    <h2>Força: {jogador.forca}</h2>
                                </div>

                            </div>

                            
                            
                                {jogador.isUser ? ( 
                                    <div className="containerCardsUser" >
                                        {
                                        jogador.listaCartas.map((elemento, index) => {
                                           
                                                return (
                                                    <div key={index}>
                                                        <p className="CardType">{elemento.tipo}</p>
                                                        <img src={elemento.imageCard}  className="cardUser"/>
                                                    </div>
                                                )
                                            
                                            
                                        })
                                        }
                                    </div>        
                                ) : (

                                    <div>
                                        <h1>Cartas: {jogador.listaCartas.length}</h1>
                                    </div>

                                )
                                    
                                }
                            </div>
                        
                    </div>
                )

            }
            )}
        </ContainerGame>
    );
}
