import { ButtonStart } from "./style";
import wallpaper from "../../../../assets/images/btn-start.png";

interface PropsButton {
    nome: string;
    StartGame: (name: string) => void;
}

export function Button(props: PropsButton) {

    return (
        <>
            <ButtonStart
                onClick={() => {
                    props.StartGame(props.nome);
                }}
                className="buttons"
            >
                <img src={wallpaper}/>
                <p>Start</p>
            </ButtonStart>
        </>
    );

}
