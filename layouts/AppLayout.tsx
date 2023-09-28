import { ImageBackground, View } from "react-native"
import { layoutStyles as styles } from "../styles"
import React, { useContext } from "react"
import { AppContext } from "../contexts/AppContextProvider"
import { StatusBar } from "expo-status-bar"

const AppLayout = ({ children }: React.PropsWithChildren) => {
    const { darkMode } = useContext(AppContext)
    return (
        <View style={styles.container}>
            <ImageBackground
                source={
                    darkMode
                        ? require("../assets/bgImageDark.png")
                        : require("../assets/bgImage.png")
                }
                resizeMode="cover"
                style={styles.imageBackground}
            >
                {children}
            </ImageBackground>
            <StatusBar style={darkMode ? "light" : "dark"} />
        </View>
    )
}

export default AppLayout