import styled from "styled-components";
import { Colors } from "../../styles";

export const NavBarContainer = styled.nav`
    width: 100%;
    height: 60px;
    background-color: ${Colors.backgroundSecondary};
    color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1001;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;

        ul {
            display: flex;
    
            li {
                padding: 0 8px 0 8px;
            }
        }
    }



`