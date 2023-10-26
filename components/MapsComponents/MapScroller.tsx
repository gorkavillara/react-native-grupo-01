import { StyleSheet, Text, View, FlatList } from "react-native"
import React from "react"
import Card from "./Card"
import { PuntoInteres, puntosInteres } from "../../assets/puntosInteres"
import { ScrollView } from "react-native"

const MapScroller = ({
    onSelectLocation,
}: {
    onSelectLocation: (l: PuntoInteres) => void
}) => {
    const selectLocation = (location: PuntoInteres) => {
        console.log(location)
        onSelectLocation(location)
    }
    return (
        <ScrollView horizontal>
            {puntosInteres.map((punto, index) => (
                <Card onPress={selectLocation} key={index} puntoInteres={punto} />
            ))}
        </ScrollView>
    )
    // <FlatList
    //     horizontal
    //     data={puntosInteres}
    //     style={{ backgroundColor: "transparent", gap: 16 }}
    //     renderItem={(item) => (
    //         <Card key={item.index} puntoInteres={item.item} />
    //     )}
    // />
}

export default MapScroller
