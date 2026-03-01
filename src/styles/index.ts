import styled, { createGlobalStyle } from 'styled-components'

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

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
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

    .btn {
        padding: 0.75rem;
        background-color: #007bff;
        color: ${Colors.backgroundPrimary};
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        transition: color 0.3s, scale 0.3s;

        &:hover {
            color: #fff;
            scale: 1.01;
        }
    }

    .buttonError {
        background-color: ${Colors.error};
    }

    .buttonSuccess {
        background-color: ${Colors.sucess};
    }
}
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100vh;
    transition: all 0.3s ease;
`


export default GlobalStyles