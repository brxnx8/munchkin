import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";
import { Mesa } from "../models/mesa";

interface PropsMesaContext {
    mesa: Mesa;
    setMesa: Dispatch<SetStateAction<Mesa>>;
}
interface PropsMesaContexProvider {
    children: ReactNode;
}

export const MesaContext = createContext({} as PropsMesaContext);

export function MesaContextProvider({
    children
}: PropsMesaContexProvider) {
    const [mesa, setMesa] = useState<Mesa>({} as Mesa);

    return (
        <MesaContext.Provider
            value={{
                mesa,
                setMesa,
            }}
        >
            {children}
        </MesaContext.Provider>
    );
}
