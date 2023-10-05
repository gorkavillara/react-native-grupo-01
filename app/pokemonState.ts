import { atom, selector } from "recoil"
import { PokemonDetails } from "../models"
import axios from "axios"

export const pokemonId = atom<number | null>({
    key: "pokemonId",
    default: 13
})

const baseUrl = "https://pokeapi.co/api/v2/pokemon"

export const pokemonDetails = selector<PokemonDetails | null>({
    key: "pokemonDetails",
    get: async ({ get }) => {
        const currentId = get(pokemonId)
        const response = await axios.get<PokemonDetails>(`${baseUrl}/${currentId}`)
        const details = response.data
        if (details) return details

        return null
    }
})