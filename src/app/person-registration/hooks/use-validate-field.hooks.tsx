import { useTranslationI18n } from '@/global/hooks/use-translation.hook';
import * as Yup from 'yup';

export function useValidateField() {
    const { t } = useTranslationI18n();

    const schema = Yup.object().shape({
        email: Yup.string()
            .required(t('person_registration.input_error.email_required'))
            .email(t('person_registration.input_error.email_invalid')),
        mobile: Yup.string()
            .required(t('person_registration.input_error.mobile_required'))
            .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, t('person_registration.input_error.mobile_invalid')),
        name: Yup.string()
            .required(t('person_registration.input_error.name_required')),
        cpf: Yup.string()
            .required(t('person_registration.input_error.cpf_required'))
            .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, t('person_registration.input_error.cpf_invalid')),
        zipCode: Yup.string()
            .required(t('person_registration.input_error.zipcode_required'))
            .matches(/^\d{5}-\d{3}$/, t('person_registration.input_error.zipcode_invalid')),
        city: Yup.string()
            .required(t('person_registration.input_error.city_required')),
        state: Yup.string()
            .required(t('person_registration.input_error.state_required')),
        neighborhood: Yup.string()
            .required(t('person_registration.input_error.neighborhood_required')),
        address: Yup.string()
            .required(t('person_registration.input_error.address_required')),
        number: Yup.string()
            .required(t('person_registration.input_error.number_required'))
            .matches(/^\d+$/, t('person_registration.input_error.number_invalid')),
        complement: Yup.string(),
    });

    return { schema };
}
