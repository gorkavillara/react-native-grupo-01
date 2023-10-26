import * as Location from "expo-location"
import { ToastAndroid } from "react-native"
import { useEffect, useState } from "react"

export const useLocation = () => {
    const [currentPosition, setCurrentPosition] =
        useState<null | Location.LocationObject>(null)
    const [realTimeCurrentPosition, setRealTimeCurrentPosition] =
        useState<null | Location.LocationObject>(null)
    const getCurrentPosition = () => {
        Location.getCurrentPositionAsync().then(setCurrentPosition)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            Location.getCurrentPositionAsync().then(setRealTimeCurrentPosition)
        }, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        Location.getForegroundPermissionsAsync().then(
            (res: Location.LocationPermissionResponse) => {
                if (!res.granted) {
                    if (!res.canAskAgain) {
                        ToastAndroid.show(
                            "Los permisos no están concedidos",
                            500
                        )
                        return
                    }
                    Location.requestForegroundPermissionsAsync().then((res) => {
                        if (!res.granted) {
                            ToastAndroid.show(
                                "Los permisos no están concedidos",
                                500
                            )
                            return
                        }
                    })
                }
                getCurrentPosition()
                console.log(res)
            }
        )
    }, [])

    return { currentPosition, realTimeCurrentPosition }
}
