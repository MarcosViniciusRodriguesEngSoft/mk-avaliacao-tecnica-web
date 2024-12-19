import { IUserAuthDTO } from "@/models/amigo-catalogo-api.model";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";

interface PropsUserContext {
    isGlobalLoading: boolean;
    user: IUserAuthDTO;
    setUser: (user: IUserAuthDTO) => void;
    setIsGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const DEFAULT_VALUE: PropsUserContext = {
    isGlobalLoading: false,
    user: {} as IUserAuthDTO,
    setUser: () => { },
    setIsGlobalLoading: () => { },
};

const GlobalContext = createContext<PropsUserContext>(DEFAULT_VALUE);

interface GlobalContextProviderProps {
    children: React.ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
    const [isGlobalLoading, setIsGlobalLoading] = useState(DEFAULT_VALUE.isGlobalLoading);
    
    const [user, setUserGlobal] = useState(() => {
        const user = Cookies.get("user");
        return user ? JSON.parse(user) : DEFAULT_VALUE.user;
    });

    const setUser = useCallback((user: IUserAuthDTO) => {
        Cookies.set("user", JSON.stringify(user), { expires: 7 });
        setUserGlobal(user);
    }, []);

    useEffect(() => {
        const user = Cookies.get("user");
        if (user) setUserGlobal(JSON.parse(user));
    }, []);

    const contextValue = useMemo(() => ({
        isGlobalLoading,
        user,
        setUser,
        setIsGlobalLoading,
    }), [isGlobalLoading, user, setUser]);

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = (): PropsUserContext => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }
    return context;
};
