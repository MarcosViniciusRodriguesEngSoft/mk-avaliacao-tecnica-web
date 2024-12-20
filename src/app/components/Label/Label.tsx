import "./styles.css";
interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children?: React.ReactNode,
    required?: boolean,
}

const Label: React.FunctionComponent<Props> = ({ children, required, ...props }: Props) => {
    return (
        <div className="container__label">
            <label {...props}>{children}</label>
            {required && <span>*</span>}
        </div >
    );
}

export default Label;