import styled from "styled-components";
import { Colors } from "../../styles";

export const SideBarContainer = styled.aside`
    width: 100%;
    height: 100vh;
    background-color: ${Colors.primary};
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
                display: block;
                padding: 12px 16px;
                color: ${Colors.enfasis};
                border-radius: 4px;
                transition: background-color 0.3s;

                &:hover {
                    border-left: 4px solid ${Colors.secondary};
                    background-color: ${Colors.backgroundSecondary};
                }
            }

        }
    }
`