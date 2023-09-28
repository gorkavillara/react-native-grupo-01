import { View, Text } from "react-native"
import { standardStyles as styles } from "../styles"
import React from "react"
import { Button, TextInput } from "react-native-paper"
import Icon from "react-native-vector-icons/AntDesign"

const PaperScreen = () => {
    return (
        <View style={[styles.container, { alignItems: "stretch", width: "80%", alignSelf: "center", gap: 16 }]}>
            <Text>Haz Login</Text>
            <TextInput mode="outlined" label="Nombre de usuario" />
            <TextInput mode="outlined" label="Contraseña" />
            <Icon name="dingding" size={50} color={"#99ddaa"} />
            <Button
                mode="elevated"
                icon={() => <Icon name="dingding" size={25} color="#dd7799" />}
                onPress={() => console.log("press")}
            >
                Enviar
            </Button>
        </View>
    )
}

export default PaperScreen
