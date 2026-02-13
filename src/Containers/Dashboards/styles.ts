import styled from "styled-components";
import { Colors } from "../../styles";

export const DashboardContainer = styled.section`
    padding: 16px;
    background-color: ${Colors.backgroundPrimary};
    color: ${Colors.textPrimary};
    height: 100vh;

    h2 {
        margin-bottom: 16px;
        font-weight: 700;
    }

    > div {
        
        > h3 {
            margin-bottom: 8px;
        }

        > p {
            margin-bottom: 16px;
        }
    }

`
export const StatisticCardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
`