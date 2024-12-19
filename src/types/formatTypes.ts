export type InputFormatTypeAttribute =
    | "money"            // Formato monetário
    | "cpf"              // CPF (Cadastro de Pessoa Física)
    | "cnpj"             // CNPJ (Cadastro Nacional de Pessoa Jurídica)
    | "cpfCnpj"          // CPF ou CNPJ
    | "cep"              // CEP (Código postal brasileiro)
    | "cel"              // Celular
    | "tel"              // Telefone
    | "percentage"       // Percentual
    | "rg";              // RG (Registro Geral - Brasil)