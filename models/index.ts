export interface Article {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export interface PokemonDetails {
    name: string
    sprites: {
        front_default: string
    }
}