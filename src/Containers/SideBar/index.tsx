import { SideBarContainer } from "./styles"
import { Link } from "react-router-dom"

const SideBar = () => {
    return (
        <SideBarContainer>
            <div>
                <h1 className="big-font">
                    Plataforma NFe
                </h1>
            </div>
            <div>
                <input type="text" placeholder="Pesquisar" />
            </div>
            <ul className="small-font">
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/Cadastrar">Cadastrar</Link>
                </li>
                <li>
                    <a href="">Dashboard</a>
                </li>
                <li>
                    <a href="">Dashboard</a>
                </li>
                <li>
                    <a href="">Dashboard</a>
                </li>
            </ul>
        </SideBarContainer>
    )
}

export default SideBar