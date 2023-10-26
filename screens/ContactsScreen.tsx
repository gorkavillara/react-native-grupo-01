import { Button, StyleSheet, Text, View } from "react-native"
import React from "react"
import { standardStyles } from "../styles"
import { useContacts } from "../hooks/useContacts"

const ContactsScreen = () => {
    const { getContacts, getContactNames } = useContacts()

    const obtenContactos = async () => {
        const info = await getContactNames()
        console.log(info)
    }
    return (
        <View style={standardStyles.container}>
            <Text>ContactsScreen</Text>
            <Button title="Obtener contactos" onPress={obtenContactos} />
        </View>
    )
}

export default ContactsScreen

const styles = StyleSheet.create({})
