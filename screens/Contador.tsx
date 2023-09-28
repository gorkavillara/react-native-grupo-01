import { View, Text, StyleSheet, Button } from "react-native"
import React, { useState } from "react"

const Contador = () => {
    const [estado, setEstado] = useState(false)
    const [contador, setContador] = useState(0)

    const renderizar = () => {
        setEstado(!estado)
    }

    const incrementaValor = () => {
        // contador = 8
        // setContador(contador + 1) // setContador(9)
        // setContador(contador + 1) // setContador(9)
        // setContador(contador + 1) // setContador(9)

        setContador((valorAnterior) => valorAnterior + 1)
        setContador((valorAnterior) => valorAnterior + 1)
        setContador((valorAnterior) => valorAnterior + 1)
        setContador((valorAnterior) => valorAnterior + 1)
        setContador((valorAnterior) => valorAnterior + 1)
    }

    return (
        <View style={styles.contadorContainer}>
            <Text style={styles.titulo}>Contador</Text>
            <Text style={styles.contador}>Valor: {contador}</Text>
            <Button title="Incrementar" onPress={incrementaValor} />
            <Button title="Renderizar" onPress={renderizar} />

        </View>
    )
}

const styles= StyleSheet.create({
    contadorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16
    },
    titulo: {
        fontSize: 48
    },
    contador: {
        fontSize: 24
    }
})

export default Contador
