import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useValidateField } from './use-validate-field.hooks';

export function useFormSubmit() {
    const { schema } = useValidateField();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        // Lógica de submissão
        console.log(data);
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
}
