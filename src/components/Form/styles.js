import styled from "styled-components";

import { cores } from "../../style/cores"

export const FormStyle = styled.div`
    width: 35%;
    min-width: 600px;
    height: 700px;
    background: ${cores.branco};
    margin: 100px auto;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 40px;
    gap: 10px;

    input{
        width: 100%;
        height: 60px;
        padding: 10px;

        border-radius: 15px;
        border: none;
        box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);

        margin-bottom: 20px;
    }

    input-placeholder{
        color: gray;
    }

    input:focus{

        outline: 0;
    }

    h1{
        font-size: 48px;
        margin: 20px 0 70px;
        font-weight: 500;
    }

    button{
        background: ${cores.azul};
        color: ${cores.branco};
        width: 100%;
        height: 50px;
        padding: 10px;
        border: none;
        font-size: 20px;
        border-radius: 15px;
        cursor: pointer;
        trasition: background 2s;
    }

    button:active{
        background: blue;
    }

    @media(max-width: 700px){
        border-radius: 0;
        width: 100%:
        margin: 100px 0;
    }
`