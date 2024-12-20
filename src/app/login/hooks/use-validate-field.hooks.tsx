import { useTranslationI18n } from '@/global/hooks/use-translation.hook';
import * as Yup from 'yup';

export function useValidateField() {
    const { t } = useTranslationI18n();

    const schema = Yup.object().shape({
        username: Yup.string()
            .required(t('login_screen.input_error.username_required'))
            .email(t('login_screen.input_error.username_invalid')),
        password: Yup.string()
            .required(t('login_screen.input_error.password_required'))
            .min(6, t('login_screen.input_error.password_min_length')),
    });

    return { schema };
}