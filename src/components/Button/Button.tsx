import Link from 'next/link';
import React, { HTMLAttributeAnchorTarget } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    target?: HTMLAttributeAnchorTarget;
}

const Button: React.FC<ButtonProps> = ({ children, className, href, target, ...props }) => {
    if (href) {
        return (
            <Link href={href} passHref target={target}>
                <button
                    className={`button ${className}`}
                    {...props}
                >
                    {children}
                </button>
            </Link>
        );
    }

    return (
        <button
            className={`button ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
