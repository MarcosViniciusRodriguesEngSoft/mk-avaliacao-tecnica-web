import { useForm } from 'react-hook-form';

export function useFormSubmit() {

    const { handleSubmit, register, setValue, watch, formState: { errors } } = useForm();

    const onSubmit = async () => {
    }
    return { onSubmit, handleSubmit, register, setValue, watch, errors };
};