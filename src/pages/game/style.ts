import styled from "styled-components";
import wallpaper from "../../assets/images/wallpaperGame.png";

export const ContainerGame = styled.main`
    width: 100%;
    height: 100%;

    position: relative;

    .divDetailsText {
        color: white;

        font-size: 25px;

        display: flex;

        align-items: center;
        justify-content: space-between;

        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: red;
    }

    .imgAvatar {
        width: 100px;
    }

    #btnPorta{
        display: flex;
        justify-content: space-between;
        gap: 250px;

        left: 37%;
    }

    .porta {
        position: absolute;
        top: 38%;
        left: 43.8%;

        width: 200px;
    }

    .portaCarta {
        position: absolute;
        top: 30%;
        left: 43.8%;
        width: 180px;
    }

    .bot0ContainerDetails {
        position: absolute;
        top: 77%;
        left: 43%;
    }

    .bot1ContainerDetails {
        position: absolute;
        top: 30%;
        left: 0.8%;
    }

    .bot2ContainerDetails {
        position: absolute;
        top: 0%;
        left: 43%;
    }

    .bot3ContainerDetails {
        position: absolute;
        top: 30%;
        left: 88%;
    }

    img{
        cursor: pointer;
    }
`;
