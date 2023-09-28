import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TouchableOpacity,
    GestureResponderEvent,
    Image,
} from "react-native"
import React, { useEffect, useState, useCallback } from "react"
import axios from "axios"

interface HPCharacter {
    id: string
    type: "character"
    attributes: {
        name: string
        image: null | string
    }
}

const url = "https://api.potterdb.com/v1/characters"

const HPCharListComponent = ({
    character,
    onPress,
}: {
    character: HPCharacter
    onPress: (event: GestureResponderEvent) => void
}) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 4,
        }}
    >
        <Text>{character.attributes.name}</Text>
        {/* <Button title="Select" /> */}
        <TouchableOpacity
            style={{ backgroundColor: "#dcdcdc", padding: 4 }}
            onPress={onPress}
        >
            <Text>Select</Text>
        </TouchableOpacity>
    </View>
)

const HPCharComponent = ({
    character,
    onPress,
}: {
    character: HPCharacter
    onPress: (event: GestureResponderEvent) => void
}) => (
    <View>
        <Text>{character.attributes.name}</Text>
        {character.attributes.image && (
            <Image
                source={{ uri: character.attributes.image }}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
            />
        )}
        <TouchableOpacity onPress={onPress}>
            <Text>Volver</Text>
        </TouchableOpacity>
    </View>
)

const HPSearch = () => {
    const [estado, setEstado] = useState(false)
    const [allCharacters, setAllCharacters] = useState<Array<HPCharacter>>([])
    const [idCharacter, setIdCharacter] = useState<string | null>(null)
    const [character, setCharacter] = useState<HPCharacter | null>(null)

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                console.log(response.data.data.length)
                setAllCharacters(response.data.data)
            })
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        // Se lanza únicamente en el primer renderizado (dependencias vacías)
        console.log("Componente montado")
    }, [])

    useEffect(() => {
        // Se lanza en cada renderizado (incluido el inicial). CUIDADO con no poner dependencias
        console.log(url)
    })

    useEffect(() => {
        // Se lanza cada vez que cambie la dependencia estado (incluido el inicial)
        console.log(estado)
    }, [estado])

    useEffect(() => {
        return () => console.log("Eliminando listeners...") // Se lanza únicamente en el desmontado
    }, [])

    const fetchNewCharacter = useCallback(() => {
        axios
            .get(`${url}/${idCharacter}`)
            .then((response) => setCharacter(response.data.data))
            .catch((error) => console.log(error))
    }, [idCharacter])

    useEffect(() => {
        if (!idCharacter) return

        fetchNewCharacter()
    }, [idCharacter])

    const selectCharacter = (char: HPCharacter) => {
        setIdCharacter(char.id)
    }

    const resetCharacterList = () => setCharacter(null)

    return (
        <View>
            {/* <Text>HPSearch</Text> */}
            {/* <Button
                title="Renderiza"
                onPress={() => setEstado((prev) => !prev)}
            /> */}
            {character ? (
                <HPCharComponent
                    character={character}
                    onPress={resetCharacterList}
                />
            ) : (
                <FlatList
                    data={allCharacters}
                    // renderItem={(char) => <Text>{char.item.attributes.name}</Text>}
                    renderItem={(char) => (
                        <HPCharListComponent
                            character={char.item}
                            onPress={() => selectCharacter(char.item)}
                        />
                    )}
                    keyExtractor={(char) => char.id}
                />
            )}
        </View>
    )
}

export default HPSearch

const styles = StyleSheet.create({})
