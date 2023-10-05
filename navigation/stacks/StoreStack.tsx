import { View, Text } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { Details, Home, Store } from "../../screens"

export type StackScreens = {
    Home: undefined // La Home no acepta props
    Store: undefined
    Details: { itemId: number } // Los Details sí van a aceptar props
}

const Stack = createStackNavigator<StackScreens>()

const StoreStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation, route }) => {
                    console.log({ navigation, route })
                    return { title: "Mi App", headerShown: false }
                }}
            />
            <Stack.Screen name="Store" component={Store} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}

export default StoreStack
