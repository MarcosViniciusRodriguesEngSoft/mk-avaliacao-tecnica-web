import { Dispatch, SetStateAction } from "react";
import Eye from "../Icons/Eye";
import EyeOff from "../Icons/EyeOff";

interface Props {
    visibility: boolean;
    setVisibility: Dispatch<SetStateAction<boolean>>;
}

const Password: React.FunctionComponent<Props> = ({ visibility, setVisibility }: Props) => {
    return (
        <div>
            {visibility ? (
                <Eye
                    width={24} height={24}
                    onClick={() => setVisibility(false)}
                />
            ) : (
                <EyeOff
                    width={24} height={24}
                    onClick={() => setVisibility(true)}
                />
            )}
        </div>
    );
}

export default Password;