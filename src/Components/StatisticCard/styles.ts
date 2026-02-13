import styled from "styled-components";
import { Colors } from "../../styles";

export const CardContainer = styled.div`
    background-color: ${Colors.backgroundSecondary};
    display: grid;
    grid-template-columns: 40px auto;
    gap: 8px;
    align-items: center;
    color: #FFF;
    height: 100px;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    h4 {
        font-family: 'JetBrains Mono', sans-serif;
        font-weight: 400;
    }

`

export const Description = styled.p`
    font-family: 'JetBrains Mono', sans-serif;
    font-size: 12px;
    color: ${Colors.enfasis};
`

export const DataStatistic = styled.p`
    font-family: 'JetBrains Mono', sans-serif;
    font-weight: 700;
    font-size: 24px;
`