import { StyleSheet, Text, View, Pressable, TextInput } from "react-native"
import React, { useState, useTransition, useDeferredValue } from "react"
import ListaLarga from "../components/ListaLarga"

const HooksConcurrencia = () => {
    const [mostrar, setMostrar] = useState(false)
    const [textoInput, setTextoInput] = useState("")
    const [isPending, startTransition] = useTransition()

    const toggleMostrar = () => {
        startTransition(() => setMostrar((prev) => !prev))
    }

    return (
        <View style={styles.container}>
            <Text>HooksConcurrencia</Text>
            <TextInput
                style={{ borderWidth: 1, padding: 8 }}
                value={textoInput}
                onChangeText={setTextoInput}
            />
            {/* <Pressable onPress={toggleMostrar}>
                <Text>Muestra resultados</Text>
            </Pressable>
            {isPending && <Text>Cargando...</Text>}
            {mostrar && <ListaLarga />} */}
            <ListaLarga texto={textoInput} />
        </View>
    )
}

export default HooksConcurrencia

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
