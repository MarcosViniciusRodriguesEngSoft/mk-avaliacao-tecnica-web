'use client'
import Button from '@/components/Button/Button';
import Input from '@/components/Fildes/Inputs/Input';
import LogoScreen from "@/components/LogoScreen/LogoScreen";
import Password from "@/components/Password/Password";
import Icon from "@/global/components/Icons/Icon";
import { useTranslationI18n } from "@/global/hooks/use-translation.hook";
import { useState } from 'react';
import { useFormSubmit } from "./hooks/use-submit-form.hook";
import LogoMiniature from '@/components/LogoMiniature/LogoMiniature';

function Login() {
    const { onSubmit, handleSubmit, register } = useFormSubmit();
    const [visibility, setVisibility] = useState<boolean>(false);
    const { t } = useTranslationI18n();

    return (
        <div className="flex h-screen w-screen">
            <div className="flex justify-center items-center w-full h-full">
                <div className="flex flex-col rounded shadow-md w-full h-full md:h-fit max-w-[400px] p-6 gap-4 bg-white">
                    <LogoMiniature />
                    <h1 className="font-poppins text-[24px] font-bold leading-10 text-[#205266]">{t('login_screen.form.title')}</h1>
                    <h3 className="font-poppins text-[16px] font-normal leading-6 text-[#63D391]">{t('login_screen.form.subTitle')}</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-6">
                                <Input
                                    prefix={<Icon name='Email' width={24} height={24} />}
                                    label={t('login_screen.label_login.username')}
                                    register={register}
                                    name="username"
                                    type='text'
                                    placeholder={t('login_screen.input_login.username_placeholder')}
                                    autoComplete="username"
                                    // errors={errors.username && errors.username.message}
                                    required={true}
                                />

                                <Input
                                    prefix={<Icon name='Lock' width={24} height={24} />}
                                    suffix={<Password setVisibility={setVisibility} visibility={visibility} />}
                                    label={t('login_screen.label_login.password')}
                                    register={register}
                                    name="password"
                                    type={visibility ? "text" : "password"}
                                    placeholder={t('login_screen.input_login.password_placeholder')}
                                    autoComplete="password"
                                    // errors={errors.password && errors.password.message}
                                    required={true}
                                />
                            </div>
                            <div>
                                <Button type="submit" className="button primary w-full">
                                    {t('login_screen.button_login')}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <LogoScreen />
        </div>
    );
};

export default Login;
