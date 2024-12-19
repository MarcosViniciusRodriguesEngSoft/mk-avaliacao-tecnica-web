import "./styles.css";

interface Props {
    children: React.ReactNode;
}

const Suffix: React.FunctionComponent<Props> = ({ children }: Props) => {
    return (
        <div className="suffix">
            <span>{children}</span>
        </div>
    );
};

export default Suffix;
