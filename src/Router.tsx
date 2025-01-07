import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Default } from "./assets/usual/components/default";
import { Game } from "./pages/game";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Default />}>
                <Route path="/munchkin" element={<Home />} />
                <Route path="game" element={<Game />} />
            </Route>
        </Routes>
    );
}
