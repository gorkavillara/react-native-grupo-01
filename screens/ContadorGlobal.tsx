import { View, Text, StyleSheet, Button } from "react-native"
import React, { useContext } from "react"
import { AppContext } from "../contexts/AppContextProvider"

const ContadorGlobal = () => {
    // const [contador, setContador] = useState(0)
    const { contador, dispatchContador } = useContext(AppContext)

    const incrementaValor = () => {
        dispatchContador({ type: "incrementaEnUno" })
    }

    return (
        <View style={styles.contadorContainer}>
            <Text style={styles.titulo}>Contador</Text>
            <Text style={styles.contador}>Valor: {contador}</Text>
            <Button title="Incrementar" onPress={incrementaValor} />
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

export default ContadorGlobal
