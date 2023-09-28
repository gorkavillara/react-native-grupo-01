import { View, Text, StyleSheet, Button } from "react-native"
import React, { useState, useMemo } from "react"
import Display from "./components/Display"

const obtenDoble = (valor: number) => {
    // Cálculo super extenso
    console.log("Estoy haciendo un cálculo muy extenso")
    return 2 * valor
}

let valor = true

const ContadorMejorado = () => {
    const [estado, setEstado] = useState(false)
    const [contador, setContador] = useState(0)

    const doble = useMemo(() => obtenDoble(contador), [contador, valor])

    const incrementaValor = () => {
        setContador((valorAnterior) => valorAnterior + 1)
    }

    console.log("doble: ", doble)
    return (
        <View style={styles.contadorContainer}>
            <Text style={styles.titulo}>Contador</Text>
            <Display contador={contador} />
            <Button title="Incrementar" onPress={incrementaValor} />
            <Button
                title="Cambio"
                onPress={() => {
                    valor = !valor
                    setEstado((prev) => !prev)
                }}
            />
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
})

export default ContadorMejorado
