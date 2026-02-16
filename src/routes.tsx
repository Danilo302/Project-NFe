import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/home';
import RegisterPessoaFisica from './Containers/RegisterPessoaFisica';

const Rotas = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/Cadastrar' element={<RegisterPessoaFisica />} />
        <Route path="/auth" element={<AuthPage />} />
    </Routes>
)

export default Rotas