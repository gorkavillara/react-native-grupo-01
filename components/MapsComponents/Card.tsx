import { StyleSheet, Text, View, Image, Pressable } from "react-native"
import React from "react"
import { PuntoInteres } from "../../assets/puntosInteres"

const Card = ({
    puntoInteres,
    onPress,
}: {
    puntoInteres: PuntoInteres
    onPress: (l: PuntoInteres) => void
}) => {
    return (
        <Pressable onPress={() => onPress(puntoInteres)}>
            <View style={styles.card}>
                <Image
                    source={{ uri: puntoInteres.imgUrl }}
                    style={styles.image}
                />
                <View>
                    <Text>{puntoInteres.nombre}</Text>
                    <Text>{puntoInteres.descripcion}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 36,
        marginHorizontal: 16,
        gap: 8,
        flexDirection: "row",
        borderRadius: 16,
        marginBottom: 16,
    },
    image: {
        width: 50,
        height: 50,
    },
})
