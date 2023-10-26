import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { RecoilRoot } from "recoil"
import NativeStack from "./navigation/stacks/NativeStack"

function App() {
    return (
        <RecoilRoot>
            <NavigationContainer>
                <NativeStack />
                <StatusBar style="light" />
            </NavigationContainer>
        </RecoilRoot>
    )
}

export default App
