'use client'
import { useTranslationI18n } from "@/global/hooks/use-translation.hook";
import Button from "../components/Button/Button";
import Input from "../components/Fildes/Inputs/Input";
import { useFormSubmit } from "./hooks/use-submit-form.hook";
import { useFindData } from "./hooks/use-find-data.hook";
import { useEffect } from "react";

function PersonRegistration() {
    const { onSubmit, handleSubmit, register, setValue, errors } = useFormSubmit();
    const { findAdderess, consultationAddress } = useFindData();
    const { t } = useTranslationI18n();

    useEffect(() => {
        if (consultationAddress) {
            setValue('zipCode', consultationAddress?.cep || '');
            setValue('city', consultationAddress?.localidade || '');
            setValue('state', consultationAddress?.uf || '');
            setValue('neighborhood', consultationAddress?.bairro || '');
            setValue('address', consultationAddress?.logradouro || '');
            setValue('complement', consultationAddress?.complemento || '');
        }
    }, [consultationAddress, setValue]);

    return (
        <div className="h-full w-screen">
            <div className="flex flex-col justify-center items-center py-20">
                <div className="flex md:shadow-md w-full max-w-[600px] rounded-lg p-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <Input
                                    label={t('person_registration.label.email')}
                                    register={register}
                                    name="email"
                                    type='text'
                                    placeholder={t('person_registration.input_placeholder.email')}
                                    errors={errors.email && errors.email.message}
                                    required={true}
                                />
                                <Input
                                    label={t('person_registration.label.mobile')}
                                    register={register}
                                    name="mobile"
                                    type="text"
                                    placeholder={t('person_registration.input_placeholder.mobile')}
                                    errors={errors.mobile && errors.mobile.message}
                                    required={true}
                                    format="cel"
                                />
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <Input
                                    label={t('person_registration.label.name')}
                                    register={register}
                                    name="name"
                                    type='text'
                                    placeholder={t('person_registration.input_placeholder.name')}
                                    errors={errors.name && errors.name.message}
                                    required={true}
                                />
                                <Input
                                    label={t('person_registration.label.cpf')}
                                    register={register}
                                    name="cpf"
                                    type="text"
                                    placeholder={t('person_registration.input_placeholder.cpf')}
                                    errors={errors.cpf && errors.cpf.message}
                                    required={true}
                                    format="cpf"
                                />
                            </div>
                            <div className="flex gap-6">
                                <Input
                                    label={t('person_registration.label.zipCode')}
                                    register={register}
                                    name="zipCode"
                                    type='text'
                                    placeholder={t('person_registration.input_placeholder.zipcode')}
                                    errors={errors.zipCode && errors.zipCode.message}
                                    required={true}
                                    format="cep"
                                    onChange={(e) => findAdderess(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <Input
                                    label={t('person_registration.label.city')}
                                    register={register}
                                    name="city"
                                    type='text'
                                    placeholder={t('person_registration.input_placeholder.city')}
                                    errors={errors.city && errors.city.message}
                                    required={true}
                                />
                                <Input
                                    label={t('person_registration.label.state')}
                                    register={register}
                                    name="state"
                                    type="text"
                                    placeholder={t('person_registration.input_placeholder.state')}
                                    errors={errors.state && errors.state.message}
                                    required={true}
                                />
                            </div>
                            <div className="flex gap-6">
                                <Input
                                    label={t('person_registration.label.neighborhood')}
                                    register={register}
                                    name="neighborhood"
                                    type='text'
                                    placeholder={t('person_registration.input_placeholder.neighborhood')}
                                    errors={errors.neighborhood && errors.neighborhood.message}
                                    required={true}
                                />
                            </div>
                            <div className="flex gap-6">
                                <Input
                                    label={t('person_registration.label.address')}
                                    register={register}
                                    name="address"
                                    type='text'
                                    placeholder={t('person_registration.input_placeholder.address')}
                                    errors={errors.address && errors.address.message}
                                    required={true}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <Input
                                    label={t('person_registration.label.number')}
                                    register={register}
                                    name="number"
                                    type='text'
                                    placeholder={t('person_registration.input_placeholder.number')}
                                    errors={errors.number && errors.number.message}
                                    required={true}
                                />
                                <Input
                                    label={t('person_registration.label.complement')}
                                    register={register}
                                    name="complement"
                                    type="text"
                                    placeholder={t('person_registration.input_placeholder.complement')}
                                    errors={errors.complement && errors.complement.message}
                                />
                            </div>
                            <div>
                                <Button type="submit" className="button primary w-full">
                                    {t('person_registration.button')}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PersonRegistration;
