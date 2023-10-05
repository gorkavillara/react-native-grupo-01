import "react-native-gesture-handler"

import AppContextProvider from "./contexts/AppContextProvider"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { StoreStack, NativeStoreStack } from "./stacks"

function App() {
    return (
        <AppContextProvider>
            <NavigationContainer>
                {/* <StoreStack /> */}
                <NativeStoreStack />
            </NavigationContainer>
            <StatusBar style="auto" />
        </AppContextProvider>
    )
}

export default App
