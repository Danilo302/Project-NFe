import { DollarSign } from 'lucide-react';
import { CardContainer, DataStatistic, Description } from "./styles"
import { Colors } from "../../styles";

const StatisticCard = () => {
    return (
        <CardContainer>
            <div>
                <DollarSign color={Colors.sucess} size={36} className='icon'/>
            </div>
            <div>
                <h4 className="small-font">Total de Projetos</h4>
                <DataStatistic className="big-font">12</DataStatistic>
                <Description className='small-font'> numero total projetos</Description>
            </div>
        </CardContainer>
    )
}

export default StatisticCard