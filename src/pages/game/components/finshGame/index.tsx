import { ReactNode } from "react";
import { ContainerFugirGame } from "./style";

interface PropsFugir {
    display: string;
    text: string;
    children: ReactNode;
}

export function FugirGame({ display, text, children }: PropsFugir) {
    return (
        <ContainerFugirGame display={display}>
            <section>
                <h1>{text}</h1>
                {children}
            </section>
        </ContainerFugirGame>
    );
}
