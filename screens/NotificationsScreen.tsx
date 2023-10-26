import { StyleSheet, Text, View, Button } from "react-native"
import React from "react"
import { useNotification } from "../hooks/useNotification"
import { standardStyles } from "../styles"

const NotificationsScreen = () => {
    const { pushToken, notification, programNotification } = useNotification()

    const programaNotificacion = () => {
        programNotification(
            {
                title: "Notificación programada",
                body: "Este es el cuerpo de la notificación programada",
            },
            5
        )
    }
    return (
        <View style={standardStyles.container}>
            <Text>Token: {pushToken}</Text>
            {notification && (
                <View>
                    <Text>Título: {notification.title}</Text>
                    <Text>Texto: {notification.body}</Text>
                    <Text>Data: {JSON.stringify(notification.data)}</Text>
                </View>
            )}

            <Button
                title="Programa Notificación"
                onPress={programaNotificacion}
            />
        </View>
    )
}

export default NotificationsScreen

const styles = StyleSheet.create({})
