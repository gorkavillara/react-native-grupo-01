import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import { useMemo, useState } from "react"
import { user as userAtom, isLoggedInSelector, User } from "../app/userState"

const obtenerUsuario = async (
    username: string,
    password: string
): Promise<User> =>
    new Promise((resolve) =>
        setTimeout(() => {
            resolve({
                id: 1,
                username,
                role: "Manager",
            })
        }, 1000)
    )

export const useUser = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useRecoilState(userAtom)
    const isLoggedInRecoil = useRecoilValue(isLoggedInSelector)
    const resetUser = useResetRecoilState(userAtom)

    const isLoggedIn = useMemo(() => (user === null ? false : true), [user])

    const login = async (username: string, password: string) => {
        // 1. Comprobamos - isLoading
        setIsLoading(true)
        // 2. y si es bueno, seteamos el estado del usuario
        // Hacemos una llamada a una base de datos
        const usuario = await obtenerUsuario(username, password)
        setUser(usuario)
        // Si es bueno -> setUser
        setIsLoading(false)
    }

    const logout = resetUser

    return { user, isLoggedIn, isLoggedInRecoil, isLoading, login, logout }
}
