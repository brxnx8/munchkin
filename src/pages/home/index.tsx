import {
    ChangeEvent,
    FormEvent,
    MouseEvent,
    useContext,
    useEffect,
    useState,
} from "react";

import { CartaContext } from "../../contexts/CardContext";

import { Button } from "./components/button";

import { Link, useNavigate } from "react-router-dom";
import { ContainerHome } from "./style";
import { Jogador } from "../../models/jogador";
import { BotsContext } from "../../contexts/BotsContext";
import { MesaContext } from "../../contexts/MesaContext";
import { Mesa } from "../../models/mesa";

export function Home() {
    const { carta, setCarta } = useContext(CartaContext);
    const { bots, setBots } = useContext(BotsContext);
    const { mesa, setMesa } = useContext(MesaContext);
    const [NomeJogador, setNomeJogador] = useState("");
    const navigate = useNavigate();

    function ChangeValue(event: ChangeEvent<HTMLInputElement>) {
        setNomeJogador(event.target.value);
    }

    async function StartGame(name: string) {
        const player = new Jogador({
            nome: name,
            nivel: 0,
            classe: "nenhuma",
            raca: "Humano",
            forca: 0,
            isUser: true,
        } as Jogador);
        const listaJogadores = [player];
        for (let i = 1; i < 4; i++) {
            listaJogadores.push(
                new Jogador({
                    nome: `bot${i}`,
                    nivel: 0,
                    classe: "nenhuma",
                    raca: "Humano",
                    forca: 0,
                    isUser: false,
                } as Jogador)
            );
        }
        const mesa = new Mesa(listaJogadores, player);
        await mesa.Main();
        setCarta(mesa.baralhoPorta.PuxarCarta());
        setMesa(mesa);
        navigate("/game");
    }

    return (
        <ContainerHome>
            <Button StartGame={StartGame} nome={NomeJogador} />

            <input
                placeholder="Nome"
                onChange={ChangeValue}
                value={NomeJogador}
            />
        </ContainerHome>
    );
}
