import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/Home';
import RegisterPessoaFisica from './pages/RegisterPessoaFisica';
import ListPerson from './pages/ListPerson';

const Rotas = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/Cadastrar' element={<RegisterPessoaFisica />} />
        <Route path="/Listar" element={<ListPerson />} />
        <Route path="/Editar/:id" element={<RegisterPessoaFisica />} />
        <Route path="/auth" element={<AuthPage />} />
    </Routes>
)

export default Rotas