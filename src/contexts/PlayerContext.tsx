import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";
import { Jogador } from "../models/jogador";

interface PropsPlayerContext {
    player: Jogador;
    setPlayer: Dispatch<SetStateAction<Jogador>>;
}
interface PropsPlayerContexProvider {
    children: ReactNode;
}

export const PlayerContext = createContext({} as PropsPlayerContext);

export function PlayerContextProvider({
    children
}: PropsPlayerContexProvider) {
    const [player, setPlayer] = useState<Jogador>({} as Jogador);

    return (
        <PlayerContext.Provider
            value={{
                player,
                setPlayer,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
}
