import { View, Text, StyleSheet, Button } from "react-native"
import useContador from "../hooks/useContador"

const ContadorConHook = () => {
    const { contador, incrementaValor, resetValor } = useContador(18)

    return (
        <View style={styles.contadorContainer}>
            <Text style={styles.contador}>Valor: {contador}</Text>
            <Button title="Incrementar" onPress={incrementaValor} />
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

export default ContadorConHook
