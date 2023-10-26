import "react-native-gesture-handler"

import { RecoilRoot } from "recoil"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { NativeStoreStack } from "./navigation/stacks"
import { useNotification } from "./hooks/useNotification"

function App() {
    const hook = useNotification()
    return (
        <RecoilRoot>
            <NavigationContainer>
                {/* <StoreStack /> */}
                <NativeStoreStack />
                {/* <TabNavigator /> */}
                {/* <DrawerNavigator /> */}
            </NavigationContainer>
            <StatusBar style="auto" />
        </RecoilRoot>
    )
}

export default App
