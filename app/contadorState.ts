import { atom, selector } from "recoil";

export const contador = atom({
    key: "contador",
    default: 3
})

export const dobleContador = selector({
    key: "dobleContador",
    get: ({ get }) => {
        const valor = get(contador)
        return valor * 2
    }
})