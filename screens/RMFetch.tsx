import { StyleSheet, Text, View, ActivityIndicator } from "react-native"
import React, { useEffect, useState } from "react"
import axios from "axios"

const url = "https://rickandmortyapi.com/api/charactser/5"

interface IRMCharacter {
    name: string
}

const CharacterComponent = ({ personaje }: { personaje: IRMCharacter }) => (
    <View>
        <Text>{personaje.name}</Text>
    </View>
)

const RMFetch = () => {
    const [personajeRM, setPersonajeRM] = useState<IRMCharacter | null>(null)
    const [error, setError] = useState<{ message: string } | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get(url)
            .then((res) => setPersonajeRM(res.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <View style={styles.container}>
            {error && <Text style={{ color: "red" }}>{error.message}</Text>}
            {loading && <ActivityIndicator size={30} />}
            {personajeRM && <CharacterComponent personaje={personajeRM} />}
        </View>
    )
}

export default RMFetch

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
