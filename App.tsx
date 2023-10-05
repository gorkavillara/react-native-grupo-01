import "react-native-gesture-handler"

import AppContextProvider from "./contexts/AppContextProvider"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { StoreStack, NativeStoreStack } from "./navigation/stacks"
import TabNavigator from "./navigation/tabs/TabNavigator"

function App() {
    return (
        <AppContextProvider>
            <NavigationContainer>
                {/* <StoreStack /> */}
                {/* <NativeStoreStack /> */}
                <TabNavigator />
            </NavigationContainer>
            <StatusBar style="auto" />
        </AppContextProvider>
    )
}

export default App
