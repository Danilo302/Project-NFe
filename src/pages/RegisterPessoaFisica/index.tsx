import { useFormik } from "formik";
import * as Yup  from "yup";
import { useRegisterMutation, useGetMunicipiosQuery, useEditPessoaMutation, useGetPessoaQuery } from "../../services/api";
import { useState, useMemo } from "react";
import { Container, FormButton, FormGroup, FormRow } from "./styles";
import { RegimeTributario } from "../../Utils/enums";
import { useNavigate, useParams, } from "react-router-dom";

type Params = {
    id?: string;
}

const RegisterPessoaFisica = () => {
    console.log(useParams<Params>());
    const navigate = useNavigate();
    const { data: pessoa } = useGetPessoaQuery(useParams<Params>().id || '');
    const [editPessoa] = useEditPessoaMutation();
    const [register] = useRegisterMutation();
    const { data: municipios} = useGetMunicipiosQuery();

    if (pessoa) {
        console.log("Pessoa recebida para edição:", pessoa);
    }else {
        console.log("Nenhuma pessoa recebida, modo de cadastro");
    }

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
        enableReinitialize: true,
        initialValues: {
            nome: pessoa?.nome || '',
            cpf: pessoa?.cpf || '',
            email: pessoa?.email || '',
            senha: pessoa?.usuario?.senha || '',
            telefone: pessoa?.telefone || '',
            inscricaoEstadual: pessoa?.inscricaoEstadual?.codigo || '',
            regimeTributario: pessoa?.regimeTributario || '',
            municipio: pessoa?.municipio?.nome || ''
        },
        validationSchema: Yup.object({
            nome: pessoa ? Yup.string().optional() : Yup.string().required("Nome é obrigatório"),
            cpf:pessoa ? Yup.string().optional() : Yup.string().required("CPF é obrigatório"),
            email:pessoa ? Yup.string().optional() : Yup.string().email("Email inválido").required("Email é obrigatório"),
            senha:pessoa ? Yup.string().optional() : Yup.string().required("Senha é obrigatória"),
            telefone:pessoa ? Yup.string().optional() : Yup.string().required("Telefone é obrigatório"),
            inscricaoEstadual:pessoa ? Yup.string().optional() : Yup.string().required("Inscrição Estadual é obrigatória"),
            regimeTributario:pessoa ? Yup.string().optional() : Yup.string().required("Regime Tributário é obrigatório"),
            municipio:pessoa ? Yup.string().optional() : Yup.string().required("Município é obrigatório")
        }),
        onSubmit: async (values) => {
            try {
                if (pessoa) {
                    const updateData = Object.fromEntries(
                        Object.entries(values).filter(([_, value]) => value !== '' && value !== null && value !== undefined)
                    );
                    
                await editPessoa({...updateData, id: pessoa.id}).unwrap();
                alert("Pessoa física editada com sucesso!"); 
                navigate('/Listar');
            } else {
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
                }
            } catch (err) {
                const error = err as { data?: { message: string } };
                const mensagemErro = error.data?.message || "Erro desconhecido ao cadastrar";
                alert("Erro ao cadastrar pessoa física: " + mensagemErro);
                console.error(err);
            }
        }
    });

    return (
        <Container>
            <form onSubmit={form.handleSubmit}>

                <div>

                    <FormGroup>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="nome" value={form.values.nome} onChange={form.handleChange} />

                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" value={form.values.cpf} onChange={form.handleChange} />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={form.values.email} onChange={form.handleChange} />

                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="senha" value={form.values.senha} onChange={form.handleChange} />
                    </FormGroup>

                    <FormGroup>
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

                    <FormRow>

                    <FormGroup>
                    <label htmlFor="uf">UF:</label>
                    <select
                        name="uf"
                        id="uf"
                        className="select-min"
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
                    </FormGroup>

                    <FormGroup>
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
                    </FormGroup>
                    </FormRow>
                    </FormGroup>
                </div>
                <FormButton>
                    <button type="submit">Registrar</button>
                </FormButton>


            </form>
        </Container>
    )
}

export default RegisterPessoaFisica;