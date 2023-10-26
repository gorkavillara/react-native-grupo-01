import { useRecoilState } from "recoil"
import { userAtom } from "../app/userState"
import { useAsyncStorage } from "./useAsyncStorage"

export const useUser = () => {
    const { saveInStorage } = useAsyncStorage()
    const [user, setUser] = useRecoilState(userAtom)

    const login = async (username: string, password: string): Promise<{ success: boolean }> => {
        // Enviar al backend la info
        // Asignarle el usuario que le toque
        setUser({
            id: 1,
            username
        })

        // Almacenarlo en local (async storage)
        await saveInStorage({ key: "user", value: JSON.stringify({ id: 1, username }) })

        return { success: true }
    }

    return { user, setUser, login }
}