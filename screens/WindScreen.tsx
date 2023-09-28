import { View, Text, Pressable, Switch } from "react-native"
import { standardStyles as styles } from "../styles"
import React from "react"
import Icon from "react-native-vector-icons/Ionicons"
import { useColorScheme } from "nativewind"

const WindScreen = () => {
    const { toggleColorScheme, colorScheme } = useColorScheme()
    return (
        <View className="flex-1 justify-center items-center">
            <Text>WindScreen</Text>
            <View className="p-4 bg-sky-300 rounded-[15px] shadow items-center dark:bg-sky-800">
                <Icon name="camera" color="white" size={30} />
                <Text className="text-2xl font-semibold text-white">Texto</Text>
                <Pressable className="py-2 px-4 bg-sky-100 rounded-[8px]" onPress={toggleColorScheme}>
                    <Text>Boton</Text>
                </Pressable>
            </View>
            <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
        </View>
    )
}

export default WindScreen
