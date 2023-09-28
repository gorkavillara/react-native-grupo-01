import { View, Text, StyleSheet } from "react-native"
import React, { useContext } from "react"
import { AppContext } from "../../../contexts/AppContextProvider"

const Display = React.memo(({ contador }: { contador: number }) => {
    // console.log("Ha vuelto a renderizar")
    const { darkMode } = useContext(AppContext)
    // const darkMode = contexto.darkMode
    return (
        <View>
            <Text
                style={[styles.contador, { color: darkMode ? "red" : "black" }]}
            >
                Valor: {contador}
            </Text>
        </View>
    )
})

const styles = StyleSheet.create({
    contador: {
        fontSize: 24,
    },
})

export default Display
