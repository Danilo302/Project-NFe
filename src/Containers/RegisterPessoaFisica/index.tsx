import { useFormik } from "formik";
import * as Yup  from "yup";
import { useRegisterMutation, useGetMunicipiosQuery } from "../../services/api";
import { useState } from "react";

const RegisterPessoaFisica = () => {
    const [register] = useRegisterMutation();
    const { data: municipios} = useGetMunicipiosQuery();

    const [selectedUf, setSelectedUf] = useState<string>('');

    const form = useFormik({
        initialValues: {
            nome: '',
            cpf: '',
            email: '',
            senha: '',
            telefone: '',
            inscricaoEstadual: '',
            regimeTributario: '',
            municipio: ''
        },
        validationSchema: Yup.object({
            nome: Yup.string().required("Nome é obrigatório"),
            cpf: Yup.string().required("CPF é obrigatório"),
            email: Yup.string().email("Email inválido").required("Email é obrigatório"),
            senha: Yup.string().min(6, "Senha deve ter no mínimo 6 caracteres").required("Senha é obrigatória"),
            telefone: Yup.string().required("Telefone é obrigatório"),
            inscricaoEstadual: Yup.string().required("Inscrição Estadual é obrigatória"),
            regimeTributario: Yup.string().required("Regime Tributário é obrigatório"),
            municipio: Yup.string().required("Município é obrigatório")
        }),
        onSubmit: async (values) => {
            try {
                await register(values).unwrap();
                alert("Cadastro realizado com sucesso!");
                form.resetForm();
            } catch (error) {
                alert("Erro ao cadastrar pessoa física");
                console.error(error);
            }
        }
    });

    return (
        <div>
            <form onSubmit={form.handleSubmit}>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" value={form.values.nome} onChange={form.handleChange} />

                <label htmlFor="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" value={form.values.cpf} onChange={form.handleChange} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={form.values.email} onChange={form.handleChange} />

                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" value={form.values.senha} onChange={form.handleChange} />

                <label htmlFor="telefone">Telefone:</label>
                <input type="text" id="telefone" name="telefone" value={form.values.telefone} onChange={form.handleChange} />

                <label htmlFor="inscricaoEstadual">Inscrição Estadual:</label>
                <input type="text" id="inscricaoEstadual" name="inscricaoEstadual" value={form.values.inscricaoEstadual} onChange={form.handleChange} />

                <label htmlFor="regimeTributario">Regime Tributário:</label>
                <input type="text" id="regimeTributario" name="regimeTributario" value={form.values.regimeTributario} onChange={form.handleChange} />

                <label htmlFor="uf">UF:</label>
                <select name="uf" id="uf" onChange={(e) => {
                    setSelectedUf(e.target.value);
                    form.setFieldValue('municipio', '');
                }}>
                    {municipios?.map((municipio) => (
                        <option key={municipio.id} value={municipio.uf.sigla}>{municipio.uf.nome}</option>
                    ))}
                </select>

                <label htmlFor="municipio">Município:</label>
                <select name="municipio" id="municipio" onChange={(e) => {
                    setSelectedUf(e.target.value);
                    form.setFieldValue('municipio', e.target.value);
                }}>
                    {municipios?.filter(m => m.uf.sigla === selectedUf).map(m => (
                        <option key={m.id} value={m.nome}>{m.nome}</option>
                    ))}
                </select>

                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default RegisterPessoaFisica;