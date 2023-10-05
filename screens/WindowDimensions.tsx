import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    useWindowDimensions,
    TextInput,
    TouchableHighlight,
    Image,
    Switch,
    Platform
} from "react-native"
import { standardStyles as styles } from "../styles"
import * as ScreenOrientation from "expo-screen-orientation"
import React, { useMemo, useState } from "react"

const WindowDimensions = () => {
    const [orientationLocked, setOrientationLocked] = useState(false)

    const { height, width } = useWindowDimensions()
    // console.log({ height, width })
    const orientation = useMemo(
        () => (height >= width ? "portrait" : "landscape"),
        [height, width]
    )

    console.log(orientation)

    const changeOrientation = (locked: boolean) => {
        if (locked) {
            ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT
            ).then(() => setOrientationLocked(true))
        } else {
            ScreenOrientation.unlockAsync().then(() =>
                setOrientationLocked(false)
            )
        }
    }
    return (
        <View
            style={[
                styles.container,
                {
                    gap: 16,
                    flexDirection:
                        orientation === "portrait" ? "column" : "row",
                },
            ]}
        >
            {Platform.OS === "android" && <Text>Running on Android</Text>}
            <Image
                source={require("../assets/logo.jpg")}
                style={{ height: 250, width: 250, objectFit: "contain" }}
            />
            <View
                style={{
                    justifyContent: "center",
                    gap: 16,
                    width: "100%",
                    maxWidth: 350,
                    alignItems: "center",
                }}
            >
                <TextInput
                    style={loginStyles.textInput}
                    placeholder="Nombre de usuario"
                />
                <TextInput
                    style={loginStyles.textInput}
                    placeholder="Contraseña"
                    secureTextEntry
                />
                <TouchableHighlight style={loginStyles.sendButton}>
                    <Text style={loginStyles.sendButtonText}>Enviar</Text>
                </TouchableHighlight>
                <View>
                    <Text>Locked orientation</Text>
                    <Switch
                        onValueChange={changeOrientation}
                        value={orientationLocked}
                    />
                </View>
            </View>
        </View>
    )
}

export default WindowDimensions

const loginStyles = StyleSheet.create({
    textInput: {
        width: "80%",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "rgba(120, 120, 120, 0.5)",
    },
    sendButton: {
        width: "80%",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        backgroundColor: "rgb(150, 160, 255)",
    },
    sendButtonText: {
        color: "white",
        textAlign: "center",
    },
})
