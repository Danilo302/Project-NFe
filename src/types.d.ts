declare type LoginType = {
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

declare type UserType = {
    id: string;
    usuario: LoginType;
    municipio: MunicipioType;
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
    inscricaoEstadual: {
        codigo: string;
    };
    regimeTributario: string;
}

declare type MunicipioType = {
    uf: {
        sigla: string;
        nome: string;
    },
    codigo: string;
    nome: string;
}