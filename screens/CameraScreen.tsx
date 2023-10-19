import {
    Pressable,
    StyleSheet,
    View,
    Vibration,
    ToastAndroid,
} from "react-native"
import { useState } from "react"
import { Camera, BarCodeScanningResult } from "expo-camera"
import { standardStyles } from "../styles"
import Icon from "react-native-vector-icons/Ionicons"
import { useCamera } from "../hooks/useCamera"

const CameraScreen = () => {
    const [url, setUrl] = useState<string | null>(null)
    const {
        cameraType,
        cameraRef,
        changeCameraType,
        takePicture,
        openGallery,
    } = useCamera()

    const barCodeScanned = (scanningResult: BarCodeScanningResult) => {
        if (url === scanningResult.data) return
        console.log(scanningResult.data)

        setUrl(scanningResult.data)
        Vibration.vibrate(300)
        ToastAndroid.show(`👀 Escaneado con éxito: ${scanningResult.data}`, 300)
    }

    return (
        <View
            style={[
                standardStyles.container,
                { width: "100%", height: "100%" },
            ]}
        >
            <Camera
                type={cameraType}
                style={styles.camera}
                ref={cameraRef}
                onBarCodeScanned={barCodeScanned}
            >
                <View style={styles.cameraButtons}>
                    <Pressable style={styles.button} onPress={changeCameraType}>
                        <Icon name="camera-reverse" size={24} color="white" />
                    </Pressable>
                    <Pressable style={styles.bigButton} onPress={takePicture}>
                        <Icon name="camera" size={40} color="white" />
                    </Pressable>
                    <Pressable style={styles.button} onPress={openGallery}>
                        <Icon name="albums" size={24} color="white" />
                    </Pressable>
                </View>
            </Camera>
        </View>
    )
}

export default CameraScreen

const styles = StyleSheet.create({
    camera: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
    },
    cameraButtons: {
        padding: 24,
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
