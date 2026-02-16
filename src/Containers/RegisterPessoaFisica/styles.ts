import styled from "styled-components";
import { Colors } from "../../styles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${Colors.backgroundPrimary};

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: ${Colors.enfasis};
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    label {
        font-weight: bold;
    }

    input, select {
        padding: 0.5rem;
        border: 1px solid ${Colors.textPrimary};
        border-radius: 4px;
    }   

    button {
        padding: 0.75rem;
        background-color: ${Colors.sucess};
        color: ${Colors.enfasis};
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
    }
`;