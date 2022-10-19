import React, { createContext, ReactNode, useCallback, useContext, useState } from "react";

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

interface IAppThemeProvider{
    children: ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData) 

export const useDrawerContext = () => {
    return useContext(DrawerContext)
}

export const DrawerProvider: React.FC<IAppThemeProvider> = ({children}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])

    return(
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
            {children}
        </DrawerContext.Provider>
    )
}