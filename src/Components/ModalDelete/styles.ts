import styled from "styled-components";
import { Colors } from "../../styles";

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.73);
    }
`

export const ModalContent = styled.div`
    position: relative;
    z-index: 1;
    padding: 20px;
    max-width: 400px;
    background-color: ${Colors.backgroundPrimary};
    border-radius: 8px;

    header {
        margin-bottom: 20px;
    }

    .options {
        display: flex;
        justify-content: flex-end;
    }

`