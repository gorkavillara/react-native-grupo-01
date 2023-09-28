import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native"
import React from "react"
import { useFetch } from "../hooks/useFetch"

const url = "https://rickandmortyapi.com/api/character/8"

interface IRMCharacter {
    name: string
    image: string
}

const CharacterComponent = ({ personaje }: { personaje: IRMCharacter }) => (
    <View>
        <Text>{personaje.name}</Text>
        <Image source={{ uri: personaje.image }} style={{ width: 250, height: 250 }} />
    </View>
)

const RMFetchConHook = () => {
    const { data, error, loading } = useFetch<IRMCharacter>(url)

    return (
        <View style={styles.container}>
            {error && <Text style={{ color: "red" }}>{error.message}</Text>}
            {loading && <ActivityIndicator size={90} />}
            {/* {personajeRM && <CharacterComponent personaje={personajeRM} />} */}
            {data && <CharacterComponent personaje={data} />}
        </View>
    )
}

export default RMFetchConHook

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
