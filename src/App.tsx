import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { PlayerContextProvider } from "./contexts/PlayerContext";
import { BotsContextProvider } from "./contexts/BotsContext";
import { MesaContextProvider } from "./contexts/MesaContext";

export function App() {
    return (
        <BrowserRouter>
            <MesaContextProvider>
                <PlayerContextProvider>
                    <BotsContextProvider>
                        <Router />
                    </BotsContextProvider>
                </PlayerContextProvider>
            </MesaContextProvider>
        </BrowserRouter>
    );
}
