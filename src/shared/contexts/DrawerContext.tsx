import React, { createContext, ReactNode, useCallback, useContext, useState } from "react";

interface IDrawerOption{
    // to: string;
    path: string;
    label: string;
    icon: string;
}

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions : IDrawerOption[];
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
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
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([])

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])
    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions)
    }, [])

    return(
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen, drawerOptions, setDrawerOptions: handleSetDrawerOptions}}>
            {children}
        </DrawerContext.Provider>
    )
}