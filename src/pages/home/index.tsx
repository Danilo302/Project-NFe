import SiderBar from "../../Containers/SideBar"
import Dashboards from "../../Containers/Dashboards"
import NavBar from "../../Components/NavBar"
import { Container } from "../../styles"

const HomePage = () => {
    return (
        <>
        <NavBar />
        <Container>
            <SiderBar />
            <Dashboards />
        </Container></>
    )
}

export default HomePage