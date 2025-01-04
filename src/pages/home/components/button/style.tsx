import styled from "styled-components";

export const ButtonStart = styled.div`
    color: black;
    position: "relative";
    width: "fit-content";
    img{
        width: 100%;       

    }

    font-size: clamp(13px, 9vw, 1.8rem);
    font-weight: 600;

    cursor: pointer;

    :hover {
            color: red;
        }
    :active {
        font-size: 1.5rem;
        && p{
            top: 35%;
            right: 42%;
        }
    }

    p{
        position: absolute;
        top: 30%;
        right: 40%;
    }
`

