import { Link } from "react-router-dom";
import { ListPersonContainer } from "./styles";
import ItensList from "../../Components/ItensList";
import { useState } from "react";
import { useGetPessoasQuery } from "../../services/api";


const ListPerson = () => {
    const { data } = useGetPessoasQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });

    const [searchTerm, setSearchTerm] = useState("");

    return (
    <ListPersonContainer>
        <div>
            <h1 className="big-font">Cadastro geral</h1>

            <Link to="/Cadastrar">+ Cadastrar</Link>
        </div>

        <form action="">
            <div>
                <label htmlFor="nome" >Nome</label>
                <input type="text" id="nome" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <label htmlFor="cpf">CPF</label>
                <input type="text" id="cpf" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </div>
            <div>
                <button>Buscar</button>
            </div>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>

                {data?.map((person) => (
                    <ItensList key={person.cpf} {...person} />
                ))}
            </tbody>
        </table>

    </ListPersonContainer>
)
}

export default ListPerson;