import * as Notifications from "expo-notifications"
import * as Device from "expo-device"
import { useEffect, useRef, useState } from "react"
import { Alert, Platform, ToastAndroid } from "react-native"

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
})

const programNotification = (
    content: Notifications.NotificationContentInput,
    delay: number
) => {
    Notifications.scheduleNotificationAsync({
        content,
        trigger: {
            seconds: delay,
        },
    })
}

export const useNotification = () => {
    const [pushToken, setPushToken] = useState<string | null>(null)
    const [notification, setNotification] =
        useState<Notifications.NotificationContent | null>(null)
    const notificationListener = useRef<Notifications.Subscription>()
    const responseListener = useRef<Notifications.Subscription>()

    useEffect(() => {
        // Lógica de suscripción
        registerForPushNotification().then((token) => {
            // Nos tendría que enviar esta info a nuestra BBDD
            token && setPushToken(token)
            console.log(token)
        })

        notificationListener.current =
            Notifications.addNotificationReceivedListener((notification) => {
                // console.log(notification)
                // Gestión de notificaciones con app abierta
                setNotification(notification.request.content)
                ToastAndroid.show(
                    `Notificación Recibida: ${notification.request.content.title}`,
                    500
                )
            })

        responseListener.current =
            Notifications.addNotificationResponseReceivedListener((response) =>
                console.log(response)
            )
        // return -> Lógica de desuscripción
        return () => {
            // if (notificationListener.current) {
            notificationListener.current &&
                Notifications.removeNotificationSubscription(
                    notificationListener.current
                )
            // }
            // if (responseListener.current) {
            responseListener.current &&
                Notifications.removeNotificationSubscription(
                    responseListener.current
                )
            // }
        }
    }, [])

    return { pushToken, notification, programNotification }
}

const registerForPushNotification = async () => {
    let token
    if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            lightColor: "#FF231F7C",
            vibrationPattern: [0, 250, 250, 250],
        })
    }

    if (Device.isDevice) {
        const res = await Notifications.getPermissionsAsync()
        if (!res.granted) {
            Alert.alert("No se han aceptado las notificaciones")
            return
        }

        // Obtener el token para las notificaciones
        const pushTokenRes = await Notifications.getExpoPushTokenAsync({
            projectId: "46c8156c-5c37-4fe3-8934-99f85d4e6779",
        })
        // const pushTokenRes = await Notifications.getDevicePushTokenAsync()
        console.log(pushTokenRes)
        token = pushTokenRes.data
    } else {
        Alert.alert("Este no es un dispositivo físico")
    }

    return token
}
