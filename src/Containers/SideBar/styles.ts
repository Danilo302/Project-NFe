import styled from "styled-components";
import { Colors } from "../../styles";

export const SideBarContainer = styled.aside<{ $isOpen: boolean }>`
    width: ${props => props.$isOpen ? "250px" : "80px"};
    height: 100vh;
    background-color: ${Colors.primary};
    color: ${Colors.backgroundPrimary};
    z-index: 1000;   
    transition: width 0.3s linear;
    overflow-x: hidden;

    ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 16px;
        align-items: ${props => props.$isOpen ? "flex-start" : "center"};

        li {
            width: 100%;
            a {
                display: flex;
                align-items: center;
                justify-content: ${props => props.$isOpen ? "flex-start" : "center"};
                gap: ${props => props.$isOpen ? "8px" : "0"};
                color: ${Colors.enfasis};
                border-radius: 4px;
                padding: 8px;
                border-left: 4px solid transparent;
                transition: all 0.3s;

                span {
                    display: ${props => props.$isOpen ? "block" : "none"};
                    opacity: ${props => props.$isOpen ? "1" : "0"};
                    transition: opacity 0.3s;
                }

                &:hover {
                    border-left: 4px solid ${Colors.secondary};
                    background-color: ${Colors.backgroundSecondary};
                }
            }
        }
    }
`;

export const ListItens = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
`

export const SideBarHeader = styled.div<{ $isOpen: boolean }>`
    display: flex;
    justify-content: ${props => props.$isOpen ? "space-between" : "center"};
    align-items: center;
    padding: 16px;

        h1 {
            display: ${props => props.$isOpen ? "block" : "none"};
            opacity: ${props => props.$isOpen ? "1" : "0"};
            transition: opacity 0.3s;
        }
`

export const BtnClose = styled.div<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
    
    a {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        transition: all 0.4s ease; 
        transform: ${props => props.$isOpen ? "rotate(0deg)" : "rotate(180deg)"};

        &:hover {
            color: ${Colors.secondary};
        }
    }
`;