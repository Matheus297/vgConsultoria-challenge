import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'


export interface MainContextProps {
    showMessage: boolean;
    setShowMessage: Dispatch<SetStateAction<boolean>>
}


export const MainContext = createContext<MainContextProps | undefined>(undefined)


export const MainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [showMessage, setShowMessage] = useState<boolean>(false)
    
    return (
        <MainContext.Provider value={{ showMessage, setShowMessage}}>
            {children}
        </MainContext.Provider>
    )
}