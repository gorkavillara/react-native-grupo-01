import { ToastAndroid, Linking } from "react-native"
import { Camera, CameraType } from "expo-camera"
import * as MediaLibrary from "expo-media-library"
import { useEffect, useState, useRef } from "react"

export const useCamera = () => {
    const [cameraType, setCameraType] = useState<CameraType>(CameraType.front)
    const [permission, requestPermission] = Camera.useCameraPermissions()
    const [mediaPermission, requestMediaPermission] =
        MediaLibrary.usePermissions()
    useEffect(() => {
        if (!mediaPermission) return

        if (!mediaPermission.granted) {
            if (!mediaPermission.canAskAgain) return

            requestMediaPermission()
        }
    }, [])
    useEffect(() => {
        if (!permission) return

        if (!permission.granted) {
            if (!permission.canAskAgain) return

            requestPermission()
        }
    }, [])

    const openGallery = () => {
        const intent = "content://media/internal/images/media"
        Linking.openURL(intent).catch((err) => {
            console.log("Error al abrir la galería", err)
        })
    }

    const changeCameraType = () =>
        setCameraType((prev) =>
            prev === CameraType.back ? CameraType.front : CameraType.back
        )

    const takePicture = () => {
        if (!cameraRef.current) return
        // Tenemos que sacar una foto
        cameraRef.current.takePictureAsync().then((info) => {
            ToastAndroid.show("¡Foto tomada correctamente!", 300)
            if (mediaPermission) {
                MediaLibrary.saveToLibraryAsync(info.uri)
                    .then(() =>
                        ToastAndroid.show("✅ Foto guardada con éxito", 300)
                    )
                    .catch(() =>
                        ToastAndroid.show("❌ Ha habido algún error", 300)
                    )
            } else {
                ToastAndroid.show("⚠️ ¡Cuidado! La foto no se ha guardado", 300)
            }
        })
    }

    const cameraRef = useRef<Camera>(null)
    return { cameraRef, changeCameraType, takePicture, cameraType, openGallery }
}
