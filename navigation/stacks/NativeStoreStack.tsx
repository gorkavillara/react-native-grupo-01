import { View, Text } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
    Contador,
    Details,
    Home,
    Store,
    NotificationsScreen,
    ContactsScreen,
} from "../../screens"
import PokemonFinder from "../../screens/PokemonFinder/PokemonFinder"
import Login from "../../screens/Login"
import { useUser } from "../../hooks/useUser"
import CameraScreen from "../../screens/CameraScreen"
import MapsScreen from "../../screens/MapsScreen"

export type StackScreensLoggedIn = {
    Home: undefined // La Home no acepta props
    Store: undefined
    Details: { itemId: number } // Los Details sí van a aceptar props
    Contador: undefined
    PokemonFinder: undefined
    CameraScreen: undefined
    MapsScreen: undefined
    NotificationsScreen: undefined
    ContactsScreen: undefined
}

export type StackScreensLoggedOut = {
    Login: undefined
}

const StackLoggedIn = createNativeStackNavigator<StackScreensLoggedIn>()
const StackLoggedOut = createNativeStackNavigator<StackScreensLoggedOut>()

const StoreStack = () => {
    const { isLoggedIn } = useUser()
    return isLoggedIn ? (
        <StackLoggedIn.Navigator initialRouteName="Home">
            <StackLoggedIn.Screen
                name="Home"
                component={Home}
                options={({ navigation, route }) => {
                    return { title: "Mi App", headerShown: false }
                }}
            />
            <StackLoggedIn.Screen
                name="Store"
                component={Store}
                options={{
                    animation: "slide_from_bottom",
                    animationDuration: 500,
                }}
            />
            <StackLoggedIn.Screen name="Details" component={Details} />
            <StackLoggedIn.Screen name="Contador" component={Contador} />
            <StackLoggedIn.Screen
                name="PokemonFinder"
                component={PokemonFinder}
            />
            <StackLoggedIn.Screen
                options={{ headerShown: false }}
                name="CameraScreen"
                component={CameraScreen}
            />
            <StackLoggedIn.Screen
                options={{ headerShown: false }}
                name="MapsScreen"
                component={MapsScreen}
            />
            <StackLoggedIn.Screen
                name="NotificationsScreen"
                component={NotificationsScreen}
            />
            <StackLoggedIn.Screen
                name="ContactsScreen"
                component={ContactsScreen}
            />
        </StackLoggedIn.Navigator>
    ) : (
        <StackLoggedOut.Navigator initialRouteName="Login">
            <StackLoggedOut.Screen
                options={{ headerShown: false }}
                name="Login"
                component={Login}
            />
        </StackLoggedOut.Navigator>
    )
}

export default StoreStack
