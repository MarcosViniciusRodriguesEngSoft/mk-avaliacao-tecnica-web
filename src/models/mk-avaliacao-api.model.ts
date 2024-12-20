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
    cpf: string;
    address: IAddressCleanDTO
}
