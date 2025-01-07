import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";
import { Card } from "../models/carta";

interface PropsCartaContext {
    carta: Card;
    setCarta: Dispatch<SetStateAction<Card>>;
}
interface PropsCartaContexProvider {
    children: ReactNode;
}

export const CartaContext = createContext({} as PropsCartaContext);

export function CartaContextProvider({
    children
}: PropsCartaContexProvider) {
    const [carta, setCarta] = useState<Card>({} as Card);

    return (
        <CartaContext.Provider
            value={{
                carta,
                setCarta,
            }}
        >
            {children}
        </CartaContext.Provider>
    );
}
