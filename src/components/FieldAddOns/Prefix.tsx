import "./styles.css";

interface Props {
    children: React.ReactNode;
}

const Prefix: React.FunctionComponent<Props> = ({ children }: Props) => {
    return (
        <div className="prefix">
            <span>{children}</span>
        </div>
    );
};

export default Prefix;
