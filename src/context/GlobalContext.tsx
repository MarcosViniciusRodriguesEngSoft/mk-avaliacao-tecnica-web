import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import { IUserAuthDTO } from "@/models/mk-avaliacao-api.model";
import { IPersonDTO } from "@/models/mk-avaliacao-api.model";

interface PropsUserContext {
    isGlobalLoading: boolean;
    user: IUserAuthDTO;
    setUser: (user: IUserAuthDTO) => void;
    setIsGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
    persons: IPersonDTO[];
    setPersons: (persons: IPersonDTO[]) => void;
    addPerson: (person: IPersonDTO) => void;
    removePerson: (personId: string) => void;
}

const DEFAULT_VALUE: PropsUserContext = {
    isGlobalLoading: false,
    user: {} as IUserAuthDTO,
    setUser: () => { },
    setIsGlobalLoading: () => { },
    persons: [],
    setPersons: () => { },
    addPerson: () => { },
    removePerson: () => { },
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

    const [persons, setPersonsGlobal] = useState<IPersonDTO[]>(() => {
        const storedPersons = localStorage.getItem("persons");
        return storedPersons ? JSON.parse(storedPersons) : DEFAULT_VALUE.persons;
    });

    const setUser = useCallback((user: IUserAuthDTO) => {
        Cookies.set("user", JSON.stringify(user), { expires: 7 });
        setUserGlobal(user);
    }, []);

    const setPersons = useCallback((persons: IPersonDTO[]) => {
        setPersonsGlobal(persons);
        localStorage.setItem("persons", JSON.stringify(persons));
    }, []);

    const addPerson = useCallback((person: IPersonDTO) => {
        setPersonsGlobal((prevPersons) => {
            const newPersons = [...prevPersons, person];
            localStorage.setItem("persons", JSON.stringify(newPersons));
            return newPersons;
        });
    }, []);

    const removePerson = useCallback((personId: string) => {
        setPersonsGlobal((prevPersons) => {
            const newPersons = prevPersons.filter((person) => person.id !== personId);
            localStorage.setItem("persons", JSON.stringify(newPersons));
            return newPersons;
        });
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
        persons,
        setPersons,
        addPerson,
        removePerson,
    }), [isGlobalLoading, user, setUser, persons, setPersons, addPerson, removePerson]);

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
