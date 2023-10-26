import {
    ImageBackground,
    Pressable,
    Text,
    View,
} from "react-native"
import React from "react"
import type { StackScreensLoggedIn } from "../navigation/stacks/NativeStoreStack"
import type { StackScreenProps } from "@react-navigation/stack"
import { standardStyles } from "../styles"
import { useUser } from "../hooks/useUser"

const Home = ({
    navigation,
}: StackScreenProps<StackScreensLoggedIn, "Home">) => {
    const { logout } = useUser()
    return (
        <ImageBackground
            source={require("../assets/HomeImage.jpg")}
            style={standardStyles.container}
        >
            <View
                style={{
                    flex: 1,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 16,
                    backgroundColor: "#5556",
                }}
            >
                <Text style={[standardStyles.text, { color: "white" }]}>
                    Bienvenido a la home
                </Text>
                <Pressable
                    style={{
                        paddingVertical: 16,
                        paddingHorizontal: 32,
                        backgroundColor: "white",
                        borderRadius: 32,
                    }}
                    onPress={() => navigation.navigate("CameraScreen")}
                >
                    <Text style={{ fontSize: 18 }}>Cámara</Text>
                </Pressable>
                <Pressable
                    style={{
                        paddingVertical: 16,
                        paddingHorizontal: 32,
                        backgroundColor: "white",
                        borderRadius: 32,
                    }}
                    onPress={() => navigation.navigate("MapsScreen")}
                >
                    <Text style={{ fontSize: 18 }}>Mapas</Text>
                </Pressable>
                <Pressable
                    style={{
                        paddingVertical: 16,
                        paddingHorizontal: 32,
                        backgroundColor: "white",
                        borderRadius: 32,
                    }}
                    onPress={() => navigation.navigate("NotificationsScreen")}
                >
                    <Text style={{ fontSize: 18 }}>Notificaciones</Text>
                </Pressable>
                {/* <Pressable
                    style={{
                        paddingVertical: 16,
                        paddingHorizontal: 32,
                        backgroundColor: "white",
                        borderRadius: 32,
                    }}
                    onPress={() => navigation.navigate("Store")}
                >
                    <Text style={{ fontSize: 18 }}>Acceder a la tienda</Text>
                </Pressable>
                <Pressable
                    style={{
                        paddingVertical: 16,
                        paddingHorizontal: 32,
                        backgroundColor: "white",
                        borderRadius: 32,
                    }}
                    onPress={() => navigation.navigate("Contador")}
                >
                    <Text style={{ fontSize: 18 }}>Acceder al contador</Text>
                </Pressable>
                <Pressable
                    style={{
                        paddingVertical: 16,
                        paddingHorizontal: 32,
                        backgroundColor: "white",
                        borderRadius: 32,
                    }}
                    onPress={() => navigation.navigate("PokemonFinder")}
                >
                    <Text style={{ fontSize: 18 }}>Acceder a PokeFinder</Text>
                </Pressable> */}
                <Pressable onPress={logout}>
                    <Text style={{ color: "white" }}>Logout</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}

export default Home
