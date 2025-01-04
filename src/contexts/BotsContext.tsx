import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";
import { Jogador } from "../models/jogador";

interface PropsBotsContext {
    bots: Jogador[];
    setBots: Dispatch<SetStateAction<Jogador[]>>;
}
interface PropsBotsContexProvider {
    children: ReactNode;
}

export const BotsContext = createContext({} as PropsBotsContext);

export function BotsContextProvider({
    children
}: PropsBotsContexProvider) {
    const [bots, setBots] = useState<Jogador[]>([]);

    return (
        <BotsContext.Provider
            value={{
                bots,
                setBots,
            }}
        >
            {children}
        </BotsContext.Provider>
    );
}
