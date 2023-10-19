import { atom, selector } from "recoil"

export interface User {
    id: number
    username: string
    role: "Admin" | "Manager" | "Customer"
}

export const user = atom<null | User>({
    // default: { id: 1, username: "Gorka", role: "Customer" },
    default: null,
    key: "user",
})

export const isLoggedInSelector = selector<boolean>({
    key: "isLoggedIn",
    get: ({ get }) => {
        const userValue = get(user)
        return userValue === null ? false : true
    },
})
