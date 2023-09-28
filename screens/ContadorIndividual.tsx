import { View, Text, StyleSheet, Button, Alert } from "react-native"
import React, { useState, useEffect } from "react"

const ContadorIndividual = () => {
    const [contador, setContador] = useState(5)

    useEffect(() => {
        if (contador !== 0) return

        Alert.alert("El contador vale 0")
    }, [contador])

    const incrementaValor = () => setContador((prev) => prev + 1)
    const decrementaValor = () => setContador((prev) => prev - 1)
    const resetValor = () => setContador(0)

    return (
        <View style={styles.contadorContainer}>
            <Text style={styles.titulo}>Contador</Text>
            <Text style={styles.contador}>Valor: {contador}</Text>
            <Button title="Incrementar" onPress={incrementaValor} />
            <Button title="Decrementar" onPress={decrementaValor} />
            <Button title="Reset" onPress={resetValor} />
        </View>
    )
}

const styles = StyleSheet.create({
    contadorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
    },
    titulo: {
        fontSize: 48,
    },
    contador: {
        fontSize: 24,
    },
})

export default ContadorIndividual
