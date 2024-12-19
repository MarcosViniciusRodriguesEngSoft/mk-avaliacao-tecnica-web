import { useGlobalContext } from '@/context/GlobalContext';
import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const GlobalLoading: React.FunctionComponent = () => {
    const { isGlobalLoading } = useGlobalContext();

    return isGlobalLoading ? (
        <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#006400"
            ariaLabel="three-circles-loading"
            wrapperStyle={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                zIndex: "9999",
                pointerEvents: 'none',
            }}
            wrapperClass=""
        />
    ) : null;
};

export default GlobalLoading;
