import { ModalContainer, ModalContent } from "./styles";

type Props = UserType & {
    onCancel: () => void;
}

const ModalDelete = (props: Props) => {
    return (
        <ModalContainer>
            <ModalContent>
                <header>
                    <h3 className="medium-font">Tem certeza que deseja excluir o usuário {props.nome}?</h3>
                </header>
                <div className="options">
                    <button className="btn buttonSuccess" >Sim</button>
                    <button onClick={props.onCancel} className="btn buttonError">Não</button>
                </div>
            </ModalContent>
            <div className="overlay" onClick={props.onCancel}></div>
        </ModalContainer>
    )
}

export default ModalDelete;