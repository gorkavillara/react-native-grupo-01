import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TextInput,
    Pressable,
    ActivityIndicator
} from "react-native"
import React, { useState } from "react"
import { standardStyles } from "../styles"
import { useUser } from "../hooks/useUser"

const Login = () => {
    const { login, isLoading } = useUser()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <ImageBackground
            source={require("../assets/loginBg.jpg")}
            style={standardStyles.container}
        >
            <View style={[standardStyles.container, styles.background]}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Tu nombre de usuario"
                    editable={!isLoading}
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Tu contraseña"
                    secureTextEntry
                    editable={!isLoading}
                    value={password}
                    onChangeText={setPassword}
                />
                <Pressable
                    onPress={() => login(username, password)}
                    style={styles.button}
                    disabled={isLoading}
                >
                    {isLoading ? <ActivityIndicator color="black" /> : <Text>Aceptar</Text>}
                </Pressable>
            </View>
        </ImageBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#0006",
        width: "100%",
        gap: 16,
    },
    title: {
        color: "white",
        fontSize: 24,
    },
    textInput: {
        backgroundColor: "#edec",
        padding: 8,
        width: "80%",
        borderRadius: 8,
    },
    button: {
        backgroundColor: "#ede",
        paddingVertical: 8,
        width: "80%",
        alignItems: "center",
    },
})
