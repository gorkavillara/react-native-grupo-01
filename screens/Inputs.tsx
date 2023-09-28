import { StyleSheet, Text, View, TextInput, Pressable } from "react-native"
import React, { useRef, useId } from "react"

const Inputs = () => {
    const inputRef = useRef<TextInput>(null)

    const focusInput = () => {
        if (!inputRef.current) return

        inputRef.current.focus() // Enfoca el componente
        // inputRef.current.blur() // Desenfoca del componente
    }

    const id = useId()

    return (
        <View style={styles.container}>
            <Text>Inputs</Text>
            <TextInput
                id={id}
                ref={inputRef}
                style={{
                    borderWidth: 1,
                    width: 150,
                    paddingVertical: 16,
                    paddingHorizontal: 8,
                }}
            />
            <Pressable onPress={focusInput}>
                <Text>Enfoca input</Text>
            </Pressable>
        </View>
    )
}

export default Inputs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
