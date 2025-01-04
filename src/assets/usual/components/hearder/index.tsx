import LogoMunchkin from "../../../../assets/images/logo.png";
import { ConteinerHeader } from "./style";

export function Header() {
    return (
        <ConteinerHeader>
             <img src={LogoMunchkin} alt="pokedex" className="pokedex" />
        </ConteinerHeader>
    );
}
