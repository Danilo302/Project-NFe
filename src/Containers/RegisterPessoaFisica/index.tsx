import { useFormik } from "formik";
import * as Yup  from "yup";
import { useRegisterMutation, useGetMunicipiosQuery } from "../../services/api";
import { useState, useMemo } from "react";
import { Container } from "./styles";
import { RegimeTributario } from "../../Utils/enums";

const RegisterPessoaFisica = () => {
    const [register] = useRegisterMutation();
    const { data: municipios} = useGetMunicipiosQuery();

    const [selectedUf, setSelectedUf] = useState<string>('');

    const ufs = useMemo(() => {
        if (!municipios) return [];

        return Array.from(
            new Map(municipios.map((m) => [m.uf.sigla, m.uf])).values()
        );
    }, [municipios]);

    const municipiosFiltrados = useMemo(() => {
        if (!municipios || !selectedUf) return [];

        return municipios.filter((m) => m.uf.sigla === selectedUf);
    }, [municipios, selectedUf]);


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
            senha: Yup.string().required("Senha é obrigatória"),
            telefone: Yup.string().required("Telefone é obrigatório"),
            inscricaoEstadual: Yup.string().required("Inscrição Estadual é obrigatória"),
            regimeTributario: Yup.string().required("Regime Tributário é obrigatório"),
            municipio: Yup.string().required("Município é obrigatório")
        }),
        onSubmit: async (values) => {
            try {

                const payload = {
                    nome: values.nome,
                    cpf: values.cpf,
                    email: values.email,
                    senha: values.senha,
                    telefone: values.telefone,
                    inscricaoEstadual: values.inscricaoEstadual,
                    regimeTributario: values.regimeTributario,
                    municipio: values.municipio
                };
                await register(payload).unwrap();
                alert("Cadastro realizado com sucesso!");
                form.resetForm();
            } catch (err: any) {

                const mensagemErro = err.data?.message || "Erro desconhecido ao cadastrar";
                alert("Erro ao cadastrar pessoa física: " + mensagemErro);
                console.error(err);
            }
        }
    });

    return (
        <Container>
            <form onSubmit={form.handleSubmit}>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="nome" value={form.values.nome} onChange={form.handleChange} />

                <label htmlFor="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" value={form.values.cpf} onChange={form.handleChange} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={form.values.email} onChange={form.handleChange} />

                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="senha" value={form.values.senha} onChange={form.handleChange} />

                <label htmlFor="telefone">Telefone:</label>
                <input type="text" id="telefone" name="telefone" value={form.values.telefone} onChange={form.handleChange} />

                <label htmlFor="inscricaoEstadual">Inscrição Estadual:</label>
                <input type="text" id="inscricaoEstadual" name="inscricaoEstadual" value={form.values.inscricaoEstadual} onChange={form.handleChange} />

                <label htmlFor="regimeTributario">Regime Tributário:</label>
                <select name="regimeTributario" id="regimeTributario" value={form.values.regimeTributario} onChange={form.handleChange}>
                    <option value="">Selecione um regime tributário</option>
                    {Object.values(RegimeTributario).map((regime) => (
                        <option key={regime} value={regime}>
                            {regime.replace(/_/g, " ")}
                        </option>
                    ))}
                </select>

                <label htmlFor="uf">UF:</label>
                <select
                    name="uf"
                    id="uf"
                    value={selectedUf}
                    onChange={(e) => {
                    setSelectedUf(e.target.value);
                    form.setFieldValue("municipio", "");
                    }}
                >
                    <option value="">Selecione um estado</option>

                        {ufs.map((uf) => (
                    <option key={uf.sigla} value={uf.sigla}>
                        {uf.nome}
                    </option>
                    ))}
                </select>


                <label htmlFor="municipio">Município:</label>
                <select
                    name="municipio"
                    id="municipio"
                    value={form.values.municipio}
                    onChange={(e) => {
                        console.log("Município selecionado:", e.target.value);
                        form.setFieldValue("municipio", e.target.value);
                    }}
                    disabled={!selectedUf}
                    >
                    <option value="">Selecione um município</option>

                    {municipiosFiltrados.map((m) => (
                        <option key={m.codigo} value={m.codigo}>
                            {m.nome}
                        </option>
                    ))}
                </select>


                <button type="submit">Registrar</button>
            </form>
        </Container>
    )
}

export default RegisterPessoaFisica;