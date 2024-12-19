import { useMemo } from 'react';

/**
 * Hook para construir classes CSS dinamicamente com lógica condicional.
 * 
 * @param baseClasses - String contendo classes fixas.
 * @param conditionalClasses - Objeto com chaves como classes e valores como condições.
 * @param additionalClasses - String de classes adicionais.
 * @returns String com todas as classes concatenadas.
 */
function useClassNames(
    baseClasses: string,
    conditionalClasses: Record<string, boolean>,
    additionalClasses: string = ''
) {
    return useMemo(() => {
        // Filtra as classes condicionais que têm valor `true`
        const conditionals = Object.entries(conditionalClasses)
            .filter(([, condition]) => condition)
            .map(([className]) => className)
            .join(' ');

        // Concatena as classes base, condicionais e adicionais
        return `${baseClasses} ${conditionals} ${additionalClasses}`.trim();
    }, [baseClasses, conditionalClasses, additionalClasses]);
}

export default useClassNames;
