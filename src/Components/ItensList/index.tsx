import { Link } from "react-router-dom";

type Props = UserType;

const ItensList = (props: Props) => {
    return (
        <tr>
            <td>{props.nome}</td>
            <td>{props.cpf}</td>
            <td>{props.email}</td>
            <td>
                <Link to={`/Editar/${props.id}`}>Editar</Link>
                <a className="del" href="">Excluir</a>
            </td>
        </tr>
    );
}

export default ItensList;