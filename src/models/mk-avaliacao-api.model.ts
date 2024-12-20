export interface IBaseDTO {
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}

export interface IUserAuthDTO {
    id: string;
    username: string;
    password: string;
}

export interface IAddressCleanDTO {
    id: string;
    zipCode: string;
    address: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
}

export interface IPersonDTO {
    id: string;
    name: string;
    email: string;
    mobile: string;
    cpf: string;
    address: IAddressCleanDTO
}

export interface IConsultationAddressDTO {
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    regiao: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}