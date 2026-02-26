declare type UserType = {
    id: string;
    login: string;
    senha: string;
}

declare type RegisterUserType = {
    nome: string,
    cpf: string,
    email: string,
    senha: string,
    telefone: string,
    inscricaoEstadual: string,
    regimeTributario: string,
    municipio: string
}

declare type MunicipioType = {
    uf: {
        sigla: string;
        nome: string;
    },
    codigo: number;
    nome: string;
}