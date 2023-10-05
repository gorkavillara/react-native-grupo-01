import { StyleSheet, Text, View, Button } from "react-native"
import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil"
import { standardStyles } from "../styles"
import { contador, dobleContador } from "../app/contadorState"

const Contador = () => {
    console.log(contador)
    // const [valor, setValor] = useRecoilState(contador)
    const valor = useRecoilValue(contador)
    const setValor = useSetRecoilState(contador)

    const dobleValor = useRecoilValue(dobleContador)

    const resetContador = useResetRecoilState(contador)

    const incrementaValor = () => {
        // setValor(valor + 1)
        // setValor(valor + 1)
        // setValor(valor + 1)
        // setValor(valor + 1)
        setValor(prev => prev + 1)
    }

    const resetValor = () => {
        resetContador()
    }
    return (
        <View style={standardStyles.container}>
            <Text style={standardStyles.text}>Contador</Text>
            <Text style={standardStyles.text}>Valor: {valor}</Text>
            <Text style={standardStyles.text}>Doble: {dobleValor}</Text>
            <Button title="Incrementa" onPress={incrementaValor} />
            <Button title="Reset" onPress={resetValor} />
        </View>
    )
}

export default Contador
