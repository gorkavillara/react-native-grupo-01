import "react-native-gesture-handler"

import { RecoilRoot } from "recoil"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { NativeStoreStack } from "./navigation/stacks"

function App() {
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
