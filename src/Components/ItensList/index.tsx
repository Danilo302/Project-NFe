
type Props = RegisterUserType;

const ItensList = (props: Props) => {
    return (
        <tr>
            <td>{props.nome}</td>
            <td>{props.cpf}</td>
            <td>{props.email}</td>
            <td>
                <a href="">Editar</a>
                <a className="del" href="">Excluir</a>
            </td>
        </tr>
    );
}

export default ItensList;