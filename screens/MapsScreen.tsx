import { StyleSheet, Text, View } from "react-native"
import MapView, { Callout, LatLng, Marker } from "react-native-maps"
import Constants from "expo-constants"
import React, { useState } from "react"
import Icon from "react-native-vector-icons/Ionicons"
import { useLocation } from "../hooks/useLocation"
import { PuntoInteres, puntosInteres } from "../assets/puntosInteres"
import MapScroller from "../components/MapsComponents/MapScroller"

const MapsScreen = () => {
    const { currentPosition, realTimeCurrentPosition } = useLocation()
    const [latitude, longitude] = [43.31528636173814, -1.9920919440645288]
    const [selectedPosition, setSelectedPosition] =
        useState<null | PuntoInteres>(null)
    // const latLong: LatLng = { latitude: lat, }

    const selectLocation = (location: PuntoInteres) => {
        setSelectedPosition(location)
    }
    return (
        <>
            <MapView style={styles.map}>
                {/* <Marker coordinate={{ latitude, longitude }} /> */}
                {/* {currentPosition && (
                    <Marker
                        coordinate={currentPosition.coords}
                        id="current"
                        pinColor="#d4a"
                        title="Posición actual"
                        description="Esta es mi posición actual"
                    >
                        <Callout>
                            <Icon name="cart" size={24} color="#d4a9" />
                            <Text>Este es el callout</Text>
                        </Callout>
                    </Marker>
                )} */}
                {puntosInteres.map((punto, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: punto.latitud,
                            longitude: punto.longitud,
                        }}
                        pinColor={punto.color}
                        title={punto.nombre}
                        description={punto.descripcion}
                    />
                ))}
                {selectedPosition && (
                    <Marker
                        coordinate={{
                            latitude: selectedPosition.latitud,
                            longitude: selectedPosition.longitud,
                        }}
                        title={selectedPosition.nombre}
                        description={selectedPosition.descripcion}
                    />
                )}
                {realTimeCurrentPosition && (
                    <Marker
                        coordinate={realTimeCurrentPosition.coords}
                        pinColor="#00f"
                    />
                )}
            </MapView>
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                }}
            >
                <MapScroller onSelectLocation={selectLocation} />
            </View>
        </>
    )
}

export default MapsScreen

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 24,
        justifyContent: "space-between",
    },
    mapButtons: {
        paddingVertical: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    button: {
        backgroundColor: "#fff6",
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    bigButton: {
        backgroundColor: "#fff6",
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
    },
})
