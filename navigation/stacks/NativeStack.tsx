import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HabitsScreen, LoginScreen } from "../../screens"

type StackScreens = {
    LoginScreen: undefined
    HabitsScreen: undefined
}

const Stack = createNativeStackNavigator<StackScreens>()

const NativeStack = () => {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="HabitsScreen" options={{ headerShown: false }} component={HabitsScreen} />
        </Stack.Navigator>
    )
}

export default NativeStack
