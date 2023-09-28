import { Text, View } from "react-native"
import { standardStyles as styles } from "../styles"
import React, { useContext } from "react"
import { AppContext } from "../contexts/AppContextProvider"

const StyledScreen = () => {
    const { darkMode } = useContext(AppContext)
    return (
        <View style={styles.container}>
            <Text
                style={[
                    styles.text,
                    { color: darkMode ? "#efefef" : "#1b1b1b" },
                ]}
            >
                StyledScreen
            </Text>
        </View>
    )
}

export default StyledScreen