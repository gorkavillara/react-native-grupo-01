import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native"
import React from "react"
import type { StackScreens } from "../navigation/stacks/NativeStoreStack"
import type { StackScreenProps } from "@react-navigation/stack"
import { standardStyles } from "../styles"
import { BlurView } from "expo-blur"

const Home = ({ navigation }: StackScreenProps<StackScreens, "Home">) => {
    return (
        <ImageBackground
            source={require("../assets/HomeImage.jpg")}
            style={standardStyles.container}
        >
            <BlurView
                intensity={30}
                tint="dark"
                style={{
                    flex: 1,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 16,
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
                </Pressable>
            </BlurView>
        </ImageBackground>
    )
}

export default Home
