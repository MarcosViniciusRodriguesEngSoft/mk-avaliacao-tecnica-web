import { Dispatch, SetStateAction } from "react";

interface Props {
    setFormattedValue: Dispatch<SetStateAction<string | undefined>>,
}

const useCleanInput = ({ setFormattedValue }: Props) => {
    const cleanInput = () => {
        setFormattedValue('');
    };

    return { cleanInput };
};

export default useCleanInput;
