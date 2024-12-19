import icons from '@/constants/icons.import';
import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons;
}

export default function Icon({ name, ...props }: Props) {
  if (!(name in icons)) {
    console.error(`Ícone '${name}' não encontrado`);
    return null;
  }

  const IconComponent = icons[name as keyof typeof icons];
  return <IconComponent {...props} />;
}