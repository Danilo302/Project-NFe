import StatisticCard from "../../Components/StatisticCard";
import { DashboardContainer, StatisticCardsContainer } from "./styles";

const Dashboards = () => {
    return (
        <DashboardContainer>
            <h2 className="big-font">
                Bem-vindo de volta Danilo!
            </h2>
            <div>
                <h3 className="big-font">Estatisticas</h3>
                <p>Veja as estatisticas de seus projetos</p>
                <StatisticCardsContainer>
                    <StatisticCard/>
                    <StatisticCard/>
                    <StatisticCard/>
                    <StatisticCard/>
                    <StatisticCard/>
                </StatisticCardsContainer>
            </div>
        </DashboardContainer>
    )
}

export default Dashboards;