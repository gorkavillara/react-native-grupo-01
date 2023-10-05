import "react-native-gesture-handler"

import AppContextProvider from "./contexts/AppContextProvider"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import DrawerNavigator from "./navigation/drawer/DrawerNavigator"

function App() {
    return (
        <AppContextProvider>
            <NavigationContainer>
                {/* <StoreStack /> */}
                {/* <NativeStoreStack /> */}
                {/* <TabNavigator /> */}
                <DrawerNavigator />
            </NavigationContainer>
            <StatusBar style="auto" />
        </AppContextProvider>
    )
}

export default App
