import React, { useState, createContext, PropsWithChildren, useReducer } from "react"

interface IAppContext {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    contador: number
}

export const AppContext = createContext<IAppContext>(null!)

const reductor = (state: number, action: { type: string, payload: any }) => {
    if (action.type === "devuelveElDoble") return state * 2
    return state
}

const AppContextProvider = ({ children }: PropsWithChildren) => {
    const [darkMode, setDarkMode] = useState(false)

    const [contador, dispatchContador] = useReducer(reductor, 1)

    dispatchContador({ type: "devuelveElDoble", payload: null })

    return (
        <AppContext.Provider value={{ darkMode, setDarkMode, contador }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
