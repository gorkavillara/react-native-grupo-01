import { View, Text, Button } from "react-native"
import React, { useState, lazy } from "react"
// import Listado from "./Listado"
// const Listado = lazy(() => import("./Listado"))

const ListaTareas = () => {
    const [mostrarListado, setMostrarListado] = useState(false)
    return (
        <View>
            <Text>ListaTareas</Text>
            {/* {mostrarListado && <Listado />} */}
            <Button
                title="mostrar/ocultar"
                onPress={() => setMostrarListado((prev) => !prev)}
            />
        </View>
    )
}

export default ListaTareas
