import { useGlobalContext } from '@/context/GlobalContext';
import { IAddressCleanDTO, IPersonDTO } from '@/models/mk-avaliacao-api.model';
import { useNotification } from '@/utils/notification';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useValidateField } from './use-validate-field.hooks';

export function useFormSubmit() {
    const { setIsGlobalLoading } = useGlobalContext();
    const notification = useNotification();
    const { push } = useRouter();
    const { schema } = useValidateField();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FieldValues) => {
        setIsGlobalLoading(true);

        const address = {
            id: uuidv4(),
            address: data.address.address,
            city: data.address.city,
            neighborhood: data.address.neighborhood,
            number: data.address.number,
            state: data.address.state,
            zipCode: data.address.zipCode,
            complement: data.address.complement,
        } as IAddressCleanDTO;

        const person = {
            id: uuidv4(),
            name: data.name,
            cpf: data.cpf,
            email: data.email,
            address: address
        } as IPersonDTO;

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log(data);
            
            setUser(person);
            push('/home');
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
        errors,
    };
}
