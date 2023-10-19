import { View, Text } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Contador, Details, Home, Store } from "../../screens"
import PokemonFinder from "../../screens/PokemonFinder/PokemonFinder"

export type StackScreens = {
    Home: undefined // La Home no acepta props
    Store: undefined
    Details: { itemId: number } // Los Details sí van a aceptar props
    Contador: undefined
    PokemonFinder: undefined
}

const Stack = createNativeStackNavigator<StackScreens>()

// TODO: Crear estado logueado
// TODO: Revisar estado asíncrono
// TODO: Crear pantalla de Login

const StoreStack = () => {
    const isLoggedIn = true
    return (
        <Stack.Navigator initialRouteName="Home">
            {isLoggedIn ? (
                <>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={({ navigation, route }) => {
                            return { title: "Mi App", headerShown: false }
                        }}
                    />
                    <Stack.Screen
                        name="Store"
                        component={Store}
                        options={{
                            animation: "slide_from_bottom",
                            animationDuration: 1000,
                        }}
                    />
                    <Stack.Screen name="Details" component={Details} />
                    <Stack.Screen name="Contador" component={Contador} />
                    <Stack.Screen
                        name="PokemonFinder"
                        component={PokemonFinder}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={Contador} />
                </>
            )}
        </Stack.Navigator>
    )
}

export default StoreStack
