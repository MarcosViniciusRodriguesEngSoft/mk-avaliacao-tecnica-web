import useClassNames from "@/global/hooks/use-class-names.hook";
import "./styles.css";

interface Props {
    before?: boolean;
    after?: boolean;
    className?: string;
    children: React.ReactNode;
}

const Addon: React.FunctionComponent<Props> = ({ children, before, after, className }: Props) => {
    const addonClasses = 'bg-neutral-100 border-neutral-300';
    const classes = useClassNames(
        'addon',
        {
            'before': !!before,
            'after': !!after,
        },
        className ? className : addonClasses
    );

    return (
        <div className={classes}>
            <span>{children}</span>
        </div>
    );
};

export default Addon;
