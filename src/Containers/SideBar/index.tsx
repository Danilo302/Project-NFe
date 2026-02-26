import { Link } from "react-router-dom";
import { BtnClose, ListItens, SideBarContainer, SideBarHeader } from "./styles";
import { Airplay, CircleUserRound, LogOut, PanelLeftClose, UserPlus } from "lucide-react";
import { useState } from "react";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <SideBarContainer $isOpen={isOpen}>            
                <SideBarHeader $isOpen={isOpen}>
                    <h1 className="big-font">Plataforma NFe</h1>
                    <BtnClose $isOpen={isOpen}>
                        <a onClick={() => setIsOpen(!isOpen)}>
                            <PanelLeftClose />
                        </a>
                    </BtnClose>
                </SideBarHeader>
        <ListItens>
            <ul className="small-font">
                <li>
                    <Link to="/">
                        <Airplay />
                        {isOpen && <span>Dashboard</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/listar">
                        <UserPlus />
                        {isOpen && <span>Cadastro Geral</span>}
                    </Link>
                </li>
            </ul>

            <ul className="small-font">
                <li>
                    <a href="">
                        <CircleUserRound />
                        {isOpen && <span>Profile</span>}
                    </a>
                </li>
                <li>
                    <a href="">
                        <LogOut />
                        {isOpen && <span>Logout</span>}
                    </a>
                </li>
            </ul>
        </ListItens>

            
        </SideBarContainer>
    );
};

export default SideBar;