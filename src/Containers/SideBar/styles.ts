import styled from "styled-components";
import { Colors } from "../../styles";

export const SideBarContainer = styled.aside`
    width: 100%;
    height: 100vh;
    background-color: ${Colors.primary};
    color: ${Colors.backgroundPrimary};
    z-index: 1000;


    div {
        margin-top: 32px;
        padding: 16px;
        input {
            width: 100%;
            padding: 8px;
            border: none;
            border-radius: 4px;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 16px;

        li {
            a {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 12px 16px;
                color: ${Colors.enfasis};
                border-radius: 4px;
                border-left: 4px solid transparent;
                transition: background-color 0.3s;

                &:hover {
                    border-left: 4px solid ${Colors.secondary};
                    background-color: ${Colors.backgroundSecondary};
                }
            }

        }
    }
`
export const BtnClose = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    cursor: pointer;
    
    a {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        background-color: ${Colors.backgroundSecondary};
        :hover {
            color: ${Colors.secondary};

        }
    }
`

export const SideBarContainerClosed = styled(SideBarContainer)`
    width: 80px;
    padding-top: 32px;

    ul {
        align-items: center;
        li {
            a {
                justify-content: center;
                gap: 0;
            }
        }
    }

    ${BtnClose} {
        justify-content: center;
    }
`