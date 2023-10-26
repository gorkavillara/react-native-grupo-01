import { useEffect } from "react"
import * as Contacts from "expo-contacts"
import { Alert } from "react-native"

const getContacts = async () => {
    const info = await Contacts.getContactsAsync()
    return info
}
const getContactNames = async () => {
    const info = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.FirstName]
    })
    return info
}

export const useContacts = () => {
    useEffect(() => {
        // Solicitar permisos
        Contacts.requestPermissionsAsync().then((res) => {
            if (!res.granted) {
                Alert.alert("Permiso para contactos no concedido")
            }
        })
    }, [])

    return { getContacts, getContactNames }
}
