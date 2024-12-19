
interface Props {
    children: React.ReactNode
    className?: string;
}

const PublicLayout: React.FC<Props> = ({ children, className }: Props) => (
    <div className={className}>{children}</div>
)

export default PublicLayout;
