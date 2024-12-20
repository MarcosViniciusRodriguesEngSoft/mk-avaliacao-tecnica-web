import { useGlobalContext } from '@/context/GlobalContext';
import { useNotification } from '@/utils/notification';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';
import { useValidateField } from './use-validate-field.hooks';
import { IUserAuthDTO } from '@/models/mk-avaliacao-api.model';
import { v4 as uuidv4 } from 'uuid';

export function useFormSubmit() {
    const { setIsGlobalLoading, setUser } = useGlobalContext();
    const notification = useNotification();
    const { push } = useRouter();
    const { schema } = useValidateField();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FieldValues) => {
        setIsGlobalLoading(true);

        const body = {
            id: uuidv4(),
            username: data.username,
            password: data.password
        } as IUserAuthDTO
        
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setUser(body);
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
