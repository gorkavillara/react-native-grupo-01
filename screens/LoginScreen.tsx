import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    TextInput
} from "react-native"
import React, { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { standardStyles } from "../styles"
import { useUser } from "../hooks/useUser"
import { useAsyncStorage } from "../hooks/useAsyncStorage"

const LoginScreen = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { login, setUser } = useUser()
    const { getFromStorage } = useAsyncStorage()
    const hazLogin = async () => {
        // Setear el usuario a nivel global
        const response = await login(username, password)

        // Almacenar los datos a nivel interno
        // Redirigir
        if (!response.success) return

        // Redirigimos
        // @ts-ignore
        navigation.navigate("HabitsScreen")
    }

    useEffect(() => {
        getFromStorage("user") //@ts-ignore
            .then((res) => {
                if (!res) return

                const user = JSON.parse(res)
                console.log(user)

                setUser(user)
                // @ts-ignore
                navigation.navigate("HabitsScreen")
            })
    }, [])
    return (
        <ImageBackground
            source={require("../assets/bg.png")}
            style={[standardStyles.container, { gap: 16 }]}
        >
            <Text style={styles.title}>Haz Log In</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Tu nombre de usuario"
                placeholderTextColor="#fff8"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Tu contraseña"
                placeholderTextColor="#fff8"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Pressable style={styles.button} onPress={hazLogin}>
                <Text>Log In</Text>
            </Pressable>
        </ImageBackground>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 24
    },
    textInput: {
        width: "80%",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "white",
        borderWidth: 0.8,
        borderRadius: 8,
        color: "white"
    },
    button: {
        width: "80%",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderColor: "white",
        borderWidth: 0.8,
        borderRadius: 8,
        backgroundColor: "white",
        alignItems: "center"
    }
})
