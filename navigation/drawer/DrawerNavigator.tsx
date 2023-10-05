import { View, Text } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import React from "react"
import Icon from "react-native-vector-icons/Ionicons"
import { Home, Store } from "../../screens"

export type DrawerScreens = {
    Home: undefined // La Home no acepta props
    Store: undefined
    Details: { itemId: number } // Los Details sí van a aceptar props
}

const Drawer = createDrawerNavigator<DrawerScreens>()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                }}
            />
            <Drawer.Screen name="Store" component={Store} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
