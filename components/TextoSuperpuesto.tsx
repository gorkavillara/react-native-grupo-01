import { View, Text, StyleSheet } from "react-native"
import React from "react"

interface TextoSuperpuestoProps {
    textoPrincipal: string
    textoSuperpuesto: string
}

const TextoSuperpuesto = ({
    textoPrincipal,
    textoSuperpuesto,
}: TextoSuperpuestoProps) => {
    return (
        <View>
            <Text style={styles.textoPrincipal}>{textoPrincipal}</Text>
            <Text style={styles.textoSuperpuesto}>{textoSuperpuesto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textoPrincipal: {
        fontSize: 92,
        textTransform: "uppercase",
        fontWeight: "800",
        opacity: 0.1,
        textAlign: "right",
    },
    textoSuperpuesto: {
        color: "#dd0033",
        fontSize: 24,
        fontWeight: "600",
        opacity: 0.9,
        textAlign: "right",
        marginTop: -42,
    },
})

export default TextoSuperpuesto
