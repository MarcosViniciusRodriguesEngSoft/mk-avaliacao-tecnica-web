import icons from '@/constants/icons.import';
import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons | string;
}

export default function Icon({ name, ...props }: Props) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.error(`Ícone '${name}' não encontrado`);
    return null;
  }

  return (
    <IconComponent {...props}/>
  );
}
