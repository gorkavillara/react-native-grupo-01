import { ToastAndroid, Linking, Alert, AlertButton } from "react-native"
import { Camera, CameraType } from "expo-camera"
import * as MediaLibrary from "expo-media-library"
import * as Sharing from "expo-sharing"
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
    }, [permission])

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

    const showPromptToSharePicture = (uri: string) => {
        const buttons: AlertButton[] = [
            { text: "Compartir", onPress: () => sharePicture(uri) },
            { text: "Cancelar", onPress: () => console.log("Cancelar") },
        ]
        Alert.alert("Compartir foto", "📷 ¿Quieres compartir esta foto?", buttons)
    }

    const sharePicture = (uri: string) => {
        Sharing.isAvailableAsync()
            .then(can => {
                if (!can) {
                    Alert.alert("Este dispositivo no puede compartir")
                    return
                }

                Sharing.shareAsync(uri)
                    .then(console.log)
                    .catch(console.log)
            })
    }

    const takePicture = () => {
        if (!cameraRef.current) return
        // Tenemos que sacar una foto
        cameraRef.current.takePictureAsync().then((info) => {
            ToastAndroid.show("¡Foto tomada correctamente!", 300)
            if (mediaPermission) {
                MediaLibrary.saveToLibraryAsync(info.uri)
                    .then(() => {
                        ToastAndroid.show("✅ Foto guardada con éxito", 300)
                        showPromptToSharePicture(info.uri)
                    })
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
