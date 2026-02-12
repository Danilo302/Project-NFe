import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    list-style: none;
    text-decoration: none;
    scroll-behavior: smooth;



    .small-font {
        font-size: 14px;
    }

    .medium-font {
        font-size: 16px;
    }

    .big-font {
        font-size: 20px;
    }

    a {
        color: inherit;
    }
}`

export const Colors = {
    primary: "#0D2B45",
    secondary: "#00A8E8",
    textPrimary: "#333333",
    backgroundPrimary: "#F4F7F9",
    backgroundSecondary: "#2D4A63",
    sucess: "#27AE60",
    error: "#E74C3C",
    enfasis: "#D1D9E0",
}



export default GlobalStyles