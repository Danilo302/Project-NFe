import { NavBarContainer } from "./styles"

const NavBar = () => {
    return(
        <NavBarContainer>
            <div>
                <div>
                    <h1 className="big-font">
                    Plataforma NFe
                    </h1>
                </div>
                <ul className="small-font">
                    <li>
                        <a href="">Danilo</a>
                    </li>
                    <li>
                        <a href="">Sair</a>
                    </li>
                </ul>
            </div>
        </NavBarContainer>
    )
}

export default NavBar