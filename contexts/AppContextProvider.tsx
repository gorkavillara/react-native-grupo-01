import React, {
    useState,
    createContext,
    PropsWithChildren,
    useReducer,
} from "react"
import { useColorScheme } from "react-native"

interface IAppContext {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    contador: number
    dispatchContador: React.Dispatch<{
        type: ReductorActions
        payload?: any
    }>
}

export const AppContext = createContext<IAppContext>(null!)

type ReductorActions = "devuelveElDoble" | "incrementaEnUno"

const reductor = (
    state: number,
    action: { type: ReductorActions; payload?: any }
): number => {
    if (action.type === "devuelveElDoble") return state * 2
    if (action.type === "incrementaEnUno") return state + 1
    return state
}

const devuelveElDoble = (val: number) => 2 * val

const AppContextProvider = ({ children }: PropsWithChildren) => {
    const scheme = useColorScheme()
    const [darkMode, setDarkMode] = useState(scheme === "light" ? false : true)
    
    // const [contador, setContador] = useState(10)

    // const duplicaContador = () => setContador(prev => devuelveElDoble(prev))

    const [contador, dispatchContador] = useReducer(reductor, 12)

    // dispatchContador({ type: "devuelveElDoble", payload: null })

    return (
        <AppContext.Provider
            value={{ darkMode, setDarkMode, contador, dispatchContador }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
