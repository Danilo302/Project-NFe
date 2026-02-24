import { BtnClose, SideBarContainer, SideBarContainerClosed } from "./styles"
import { Link } from "react-router-dom"

import { useState } from "react"
import { Airplay, PanelLeftClose, PanelLeftOpen, UserPlus } from "lucide-react";

const SideBar = () => {
    const [isOpenSideBar, setIsOpenSideBar] = useState(true);

    return (
        <>
            {isOpenSideBar ? (
                <SideBarContainer>              
                <div>
            <h1 className="big-font">
                Plataforma NFe
            </h1>
        </div><div>
                <input type="text" placeholder="Pesquisar" />
            </div><ul className="small-font">
                <li>
                    <Link to="/">
                        <Airplay />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/Cadastrar">
                        <UserPlus />
                        Cadastrar
                    </Link>
                </li>
                <li>

                    <a href="">
                        <Airplay />
                        Dashboard
                    </a>
                </li>
            </ul>
            <BtnClose>
                <a onClick={() => setIsOpenSideBar(false)}><PanelLeftClose /></a>
            </BtnClose>
                </ SideBarContainer>
            ) : (
                <SideBarContainerClosed>
                <ul className="small-font">
                <li>
                    <Link to="/">
                    <Airplay />
                    </Link>
                </li>
                <li>
                    <Link to="/Cadastrar">
                    <UserPlus />           
                    </Link>
                </li>
                <li>
                    
                    <a href="">
                        <Airplay />
                    </a>
                </li>
            </ul>

                <BtnClose>
                    <a onClick={() => setIsOpenSideBar(true)}>
                        <PanelLeftOpen />
                    </a>
                </BtnClose>
                </ SideBarContainerClosed>
            )}
        </>
    )
}

export default SideBar