import { useState } from "react";
import { Link } from "react-router-dom";
import ModalDelete from "../ModalDelete";

type Props = UserType;

const ItensList = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        
        <tr>
            <td>{props.nome}</td>
            <td>{props.cpf}</td>
            <td>{props.email}</td>
            <td className="options">
                <Link className="small-font btn" to={`/Editar/${props.id}`}>Editar</Link>
                <button className="small-font btn buttonError" onClick={() => setIsOpen(true)}>Excluir</button>
            </td>
        </tr>

        {isOpen && <ModalDelete {...props} onCancel={() => setIsOpen(false)} />}
        </>

    );
}

export default ItensList;