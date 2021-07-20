import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

import { cores } from "./style/cores"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        box-sizing: border-box;
        font-family: 'Comfortaa', cursive;
    }

    body{
        background: linear-gradient(to right, ${cores.rosa}, ${cores.amarelo})
    }
`

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`