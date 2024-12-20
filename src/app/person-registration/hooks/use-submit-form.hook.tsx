import { useGlobalContext } from '@/context/GlobalContext';
import { IAddressCleanDTO, IPersonDTO } from '@/models/mk-avaliacao-api.model';
import { useNotification } from '@/utils/notification';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useValidateField } from './use-validate-field.hooks';

export function useFormSubmit() {
    const { setIsGlobalLoading, addPerson } = useGlobalContext();
    const notification = useNotification();
    const { push } = useRouter();
    const { schema } = useValidateField();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FieldValues) => {
        setIsGlobalLoading(true);

        const address = {
            id: uuidv4(),
            address: data.address,
            city: data.city,
            neighborhood: data.neighborhood,
            number: data.number,
            state: data.state,
            zipCode: data.zipCode,
            complement: data.complement,
        } as IAddressCleanDTO;

        const person = {
            id: uuidv4(),
            name: data.name,
            cpf: data.cpf,
            email: data.email,
            mobile: data.mobile,
            address: address
        } as IPersonDTO;

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            addPerson(person);
            push('/list-person');
        } catch {
            notification({ description: 'Usuário não encontrado!', type: 'info', message: 'Atenção!' });
        } finally {
            setIsGlobalLoading(false);
        }
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        setValue,
        errors,
    };
}
