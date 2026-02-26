import { Routes, Route } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import HomePage from './Pages/Home';
import RegisterPessoaFisica from './Containers/RegisterPessoaFisica';
import ListPerson from './Containers/ListPerson';

const Rotas = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/Cadastrar' element={<RegisterPessoaFisica />} />
        <Route path="/Listar" element={<ListPerson />} />
        <Route path="/auth" element={<AuthPage />} />
    </Routes>
)

export default Rotas