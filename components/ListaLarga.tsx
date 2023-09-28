import { ScrollView, Text } from "react-native"
import React, { useEffect, useDeferredValue } from "react"

const obtenElementos = (texto: string, cantidad: number) => {
    const elementos: string[] = []

    for (let i = 0; i < cantidad; i++) {
        elementos.push(texto)
    }

    return elementos
}

const ListaLarga = ({ texto }: { texto: string }) => {
    const textoDeferred = useDeferredValue(texto)
    const elementos = obtenElementos(textoDeferred, 5000)

    useEffect(() => {
        console.log(`texto: ${texto}`)
        console.log(`textoDeferred: ${textoDeferred}`)
        console.log(`-----------------`)
    }, [textoDeferred])
    return (
        <ScrollView>
            {elementos.map((elemento, ind) => (
                <Text key={ind}>{elemento}</Text>
            ))}
        </ScrollView>
    )
}

export default ListaLarga
