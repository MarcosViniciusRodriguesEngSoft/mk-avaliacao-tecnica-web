interface Props {
    error: string,
    className?: string,
}

const ValidateField: React.FunctionComponent<Props> = ({ error, className }: Props) => {
    return (
        error  && <p className={className} style={{ color: 'red' }}>{error || 'This field is required'}</p>
    );
}

export default ValidateField;