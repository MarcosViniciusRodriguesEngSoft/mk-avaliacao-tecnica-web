
import useClassNames from '@/global/hooks/use-class-names.hook';
import { InputFormatTypeAttribute } from '@/types/formatTypes';
import {
    ChangeEventHandler,
    useState
} from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import Addon from '../../FieldAddOns/Addon';
import Prefix from '../../FieldAddOns/Prefix';
import Suffix from '../../FieldAddOns/Suffix';
import AllowClear from '../../Icons/AllowClear';
import Label from '../../Label/Label';
import ValidateField from '../../ValidateField/ValidateField';
import useCleanInput from './hooks/use-clean-input.hook';
import useFormatValue from './hooks/use-format-value.hook';
interface InputHTMLCustomAttributes {
    label?: string;
    required?: boolean;
    register?: UseFormRegister<FieldValues> | any;
    format?: InputFormatTypeAttribute;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    addonBefore?: React.ReactNode;
    addonBeforeClassName?: string;
    addonAfter?: React.ReactNode;
    addonAfterClassName?: string;
    allowClear?: boolean;
    errors?: string;
}
interface Props
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'>, InputHTMLCustomAttributes {
    value?: string | number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<Props> = ({
    label,
    required = false,
    format,
    onChange,
    errors,
    name,
    className,
    register,
    prefix,
    suffix,
    addonBefore,
    addonBeforeClassName,
    addonAfter,
    addonAfterClassName,
    allowClear,
    ...props
}: Props) => {
    const [formattedValue, setFormattedValue] = useState<string | undefined>(undefined);
    const { cleanInput } = useCleanInput({ setFormattedValue });

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const rawValue = event.target.value;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const formatted = useFormatValue({ value: rawValue, format });
        setFormattedValue(formatted);

        if (onChange) {
            onChange(event);
        }
    };

    const inputClasses = useClassNames(
        'px-2 py-3 w-full text-stone-400 text-sm font-normal leading-tight border-2 border shadow-input rounded-lg focus:outline-none focus:border-blue-500 border-neutral-400',
        {
            'pl-[40px]': !!prefix,
            'pr-[40px]': !!suffix,
            'rounded-s-none': !!addonBefore,
            'rounded-e-none': !!addonAfter,
            'border-[#DD052B] border-opacity-80 shadow-inputError': !!errors,
        },
        className ?? ''
    );

    return (
        <div className="flex flex-col w-full gap-2">
            {label && (
                <Label
                    htmlFor={name}
                    className="font-poppins text-[14px] font-normal leading-6 text-black"
                    required={required}>
                    {label}
                </Label>
            )}
            <div className="flex">
                {addonBefore && <Addon before className={addonBeforeClassName}>{addonBefore}</Addon>}
                <div className="relative flex items-center w-full">
                    {prefix && <Prefix>{prefix}</Prefix>}
                    <input
                        {...(register && name ? register(name) : {})}
                        id={name && name}
                        value={formattedValue}
                        {...(format ? { onChange: handleChange } : {})}
                        className={inputClasses}
                        {...props}
                    />
                    {suffix && <Suffix>{suffix}</Suffix>}
                    {allowClear && formattedValue && (
                        <AllowClear
                            onClick={cleanInput}
                            className="absolute right-2 cursor-pointer text-neutral-500 hover:text-neutral-700 text-xl" />
                    )}
                </div>
                {addonAfter && <Addon after className={addonAfterClassName}>{addonAfter}</Addon>}
            </div>
            {errors && <ValidateField error={errors} className="red" />}
        </div>
    );

};

Input.displayName = 'Input';

export default Input;
