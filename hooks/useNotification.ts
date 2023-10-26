import { Platform } from "react-native"
import * as Notifications from "expo-notifications"
import * as Device from "expo-device"
import { useEffect } from "react"

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false
    })
})

const snoozeNotification = (text: string, delay: number) => {
    Notifications.scheduleNotificationAsync({
        content: {
            title: text
        },
        trigger: { seconds: delay }
    })
}

export const useNotification = () => {
    useEffect(() => {
        getNotificationPermissions()
        // Crear el listener
    }, [])

    return { snoozeNotification }
}

const getNotificationPermissions = async () => {
    let token
    if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX
        })
    }

    if (Device.isDevice) {
        Notifications.requestPermissionsAsync().then(console.log)

        const tokenRes = await Notifications.getExpoPushTokenAsync({
            projectId: "46c8156c-5c37-4fe3-8934-99f85d4e6779"
        })
        console.log(tokenRes.data)
        token = tokenRes.data
    }

    return token
}
