import { StyleSheet, Text, View, Image } from "react-native"
import React, { useState, useEffect } from "react"
import * as Network from "expo-network"

const ImageResponsive = () => {
    useEffect(() => {
        console.log(`Getting image via ${Network.NetworkStateType.WIFI}`)
    }, [])
    const [showFullPicture, setShowFullPicture] = useState(false)
    return (
        <>
            <Image
                source={require("../assets/snow_thumb.jpg")}
                style={[
                    styles.image,
                    { display: showFullPicture ? "none" : "flex" },
                ]}
                resizeMode="cover"
            />
            <Image
                source={require("../assets/snow.jpg")}
                style={[
                    styles.image,
                    { display: showFullPicture ? "flex" : "none" },
                ]}
                resizeMode="cover"
                onLoad={() => setTimeout(() => setShowFullPicture(true), 3000)}
            />
        </>
    )
}

export default ImageResponsive

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 250,
    },
})
