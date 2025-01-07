import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartaContextProvider } from "./contexts/CardContext";
import { BotsContextProvider } from "./contexts/BotsContext";
import { MesaContextProvider } from "./contexts/MesaContext";

export function App() {
    return (
        <BrowserRouter>
            <MesaContextProvider>
                <CartaContextProvider>
                    <BotsContextProvider>
                        <Router />
                    </BotsContextProvider>
                </CartaContextProvider>
            </MesaContextProvider>
        </BrowserRouter>
    );
}
