import { MouseEvent, useContext, useState } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import imgPorta from "../../assets/images/Door0.png"
import imgPortaAberta from "../../assets/images/Door1.png"
import imgAvatar from "../../assets/images/cpu-3m.png"
import imgBatle from "../../assets/images/btn-battle.png"
import imgRun from "../../assets/images/btn-run.png"

import { ContainerGame } from "./style";
import { MesaContext } from "../../contexts/MesaContext";


export function Game() {

    const { player, setPlayer } = useContext(PlayerContext);
    const { mesa, setMesa } = useContext(MesaContext);
    const [Porta, setPorta] = useState(imgPorta);
    const [classPorta, setClassPorta] = useState("porta");
    const [carta, setCarta] = useState(mesa.baralhoPorta.PuxarCarta());

    function AbrirPorta() {
                console.log(mesa)
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


    return (
        <ContainerGame>
            <img src={Porta} className={classPorta} onClick={classPorta != "portaCarta" ? AbrirPorta : undefined}/>
            {classPorta == "portaCarta" && carta.tipo == "Monstro" && (

                                        <div className="porta" id="btnPorta">
                                            <img src={imgBatle}/>
                                            <img src={imgRun} />
                                        </div>



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
