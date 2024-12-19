import { InputFormatTypeAttribute } from "@/types/formatTypes";
import { formatCel, formatCep, formatCnpj, formatCpf, formatCpfCnpj, formatMoneyLive } from "@/utils/format";
interface Props {
    format?: InputFormatTypeAttribute;
    value: string | number | readonly string[] | undefined;
}

const useFormatValue = ({ value, format }: Props) => {
    const formattedValue = value;

    switch (format) {
        case 'money':
            return formatMoneyLive(formattedValue);
        case 'cel':
            return formatCel(formattedValue);
        case 'cpfCnpj':
            return formatCpfCnpj(formattedValue);
        case 'cpf':
            return formatCpf(formattedValue);
        case 'cnpj':
            return formatCnpj(formattedValue);
        case 'cep':
            return formatCep(formattedValue);
        default:
            return formattedValue;
    }
};

export default useFormatValue;
