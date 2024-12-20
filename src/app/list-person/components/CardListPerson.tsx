import { IPersonDTO } from "@/models/mk-avaliacao-api.model";
import { formatCpf } from "@/utils/format";

interface Props {
    person: IPersonDTO
}

const CardListPerson: React.FunctionComponent<Props> = ({ ...props }: Props) => {
    return (
        <div className="flex flex-col md:flex-row justify-between w-full border p-4 rounded-md shadow-md gap-2">
            <div>
                <p className="font-poppins text-[16px] font-normal leading-6 text-black">{props.person.name}</p>
            </div>
            <div>
                <p className="font-poppins text-[16px] font-normal leading-6 text-black">{formatCpf(props.person.cpf)}</p>
            </div>
            <div>
                <p className="font-poppins text-[16px] font-normal leading-6 text-black">{props.person.email}</p>
            </div>
            <div>
                <p className="font-poppins text-[16px] font-normal leading-6 text-black">{props.person.mobile}</p>
            </div>
        </div >
    );
}

export default CardListPerson;