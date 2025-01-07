import styled from "styled-components";


export const ContainerGame = styled.main`
    width: 100%;
    height: 100%;

    position: relative;

    h1{
        color: white;
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: red;
    }

    .conatinerPlayer{
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 20px;
    }

    .containerDetailsPlayer{
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        gap: 30px;


    }

    .close{
        width: 28px;
    }
    .close:hover{
        width: 32px;
    }

    .divDetailsText {
        width: 70%;

        color: white;

        font-size: 20px;

        display: flex;
        flex-direction: column;

        align-items: start;
        

        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: red;
    }

    .imgAvatar {
        width: 80px;
        height: 80px;
    }

    #btnPorta{
        display: flex;
        justify-content: space-between;
        gap: 250px;

        left: 37%;

        transition: 0.3s ease-in-out;

        
    }

    .porta {
        position: absolute;
        top: 30%;
        left: 43.8%;

        width: 180px;

        transition: 0.3s ease-in-out;

        
    }

    .portaCarta {
        position: absolute;
        top: 30%;
        left: 43.8%;
        width: 200px;

        transition: 0.3s ease-in-out;
    }

    .bot0ContainerDetails {
        position: absolute;
        top: 77%;
        left: 1%;
        display: flex;
    }

    .bot1ContainerDetails {
        position: absolute;
        top: 0%;
        left: 0.8%;
        display: flex;
    }

    .bot2ContainerDetails {
        position: absolute;
        top: 0%;
        left: 30%;
        display: flex;
    }

    .bot3ContainerDetails {
        position: absolute;
        top: 0%;
        left: 60%;
        display: flex;
    }

    .currentPlayer{
        border: 3px solid red;

        box-sizing: border-box;

        padding: 8px;
    }

    img{
        cursor: pointer;
    }

    .containerCardsUser{
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    .cardUser{
        width: 130px;
    }

    .CardType{
        background-color: black;

        color: white;
    }

    .divAvançar{
        background-color: red;

        align-content: center;

        color: black;

        width: 120px;
        height: 120px;

        position: absolute;
        top: 0%;
        left: 90%;

        border-radius: 10px;

        box-shadow: 5px 5px 5px black;

        transition: 0.3s;

        cursor: pointer;
    }

    .divAvançar:active {
        font-size: 0.8rem;
        && h1{
            top: 35%;
            right: 42%;
        }
    }

    .divAvançar h1{
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: black;
    }

    #Acabou{
       
        background-color: rgba(0, 0, 0, 0.955);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 5;

        transition: 0.3s;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: 0.3s;
    }

    .CartaLegenda{
        position: relative;
    }

    .CartaLegenda figcaption{
        opacity: 0;

        position: absolute;

        background-color: rgba(0, 0, 0, .8);

        top: 0;
        width: 95%;
        height: 95%;
        
        padding: 10px;

        box-sizing: border-box;

        transition: 0.3s;

        cursor: pointer;
        
    }

    .CartaLegenda:hover figcaption{
        opacity: 1;
    }
`;
