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


export function Game() {

    const { player, setPlayer } = useContext(PlayerContext);
    const { mesa, setMesa } = useContext(MesaContext);
    const [Porta, setPorta] = useState(imgPorta);
    const [classPorta, setClassPorta] = useState("porta");
    const [carta, setCarta] = useState(mesa.baralhoPorta.PuxarCarta());
    const [imgDireita, setImgDireita] = useState(imgPorta);
    const [imgEsquerda, setImgEsquerda] = useState(imgPorta);
    const [displayFugir, setDisplayFugir] = useState("none")
    const [fineshedTurno, setFineshedTurno] = useState(true)


    function AbrirPorta() {
        setPorta(imgPortaAberta);
        setTimeout(() => {
            setPorta(carta.imageCard)
            setClassPorta("portaCarta")
        }, 1200);

    }
   
    function isPlayer(){
        if(!mesa.player.isUser){
            AbrirPorta();
        }
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
                mesa.listaCartasNaMao.push(new CartaNaMao(player, cartaBau));
                player.setNivel(1)
                player.setForca(1)
            }
        }else{
            Perdeu(player)
        }
        setCarta(mesa.baralhoPorta.PuxarCarta());
        setPorta(imgPorta);
        setClassPorta('porta');
        setFineshedTurno(false);
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
                setCarta(mesa.baralhoPorta.PuxarCarta());
                setPorta(imgPorta);
                setClassPorta('porta');
                setImgDireita(imgPorta);
                setImgEsquerda(imgPorta);
            }, 2000)
           setFineshedTurno(false);
        }, 1000)

    }

    function Fugir(){
       setDisplayFugir('flex')
    }


    return (
        <ContainerGame>
            <img src={Porta} className={classPorta} onClick={classPorta != "portaCarta" && fineshedTurno ? AbrirPorta : undefined}/>
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
                    <div className={jogador.isUser && index==0 ? "bot0ContainerDetails" : `bot${index}ContainerDetails`} key={index}>
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
                                        mesa.listaCartasNaMao.map((elemento, index) => {
                                            if (elemento.jogador == jogador){
                                                return (
                                                    <div key={index}>
                                                        <p className="CardType">{elemento.carta.tipo}</p>
                                                        <img src={elemento.carta.imageCard}  className="cardUser"/>
                                                    </div>
                                                )
                                            }else{
                                                return
                                            }
                                            
                                        })
                                        }
                                    </div>        
                                ) : (

                                    <div>
                                        <h1>Cartas: {jogador.qtdCartas}</h1>
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
