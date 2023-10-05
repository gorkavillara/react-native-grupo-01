import { View, Text } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import Icon from "react-native-vector-icons/Ionicons"
import { Home, Store } from "../../screens"

export type TabScreens = {
    Home: undefined // La Home no acepta props
    Store: undefined
    Details: { itemId: number } // Los Details sí van a aceptar props
}

const Tab = createBottomTabNavigator<TabScreens>()

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <Icon
                            name={focused ? "home" : "home-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Store"
                component={Store}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <Icon
                            name={focused ? "cart" : "cart-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator
