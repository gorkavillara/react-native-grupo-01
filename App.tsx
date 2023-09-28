import AppContextProvider from "./contexts/AppContextProvider"
import ToggleDarkMode from "./components/common/ToggleDarkMode"
import AppLayout from "./layouts/AppLayout"
import { PaperProvider } from "react-native-paper"
import WindScreen from "./screens/WindScreen"

function App() {
    return (
        <PaperProvider>
            <AppContextProvider>
                <AppLayout>
                    {/* <StyledScreen /> */}
                    {/* <PaperScreen /> */}
                    <WindScreen />
                    <ToggleDarkMode />
                </AppLayout>
            </AppContextProvider>
        </PaperProvider>
    )
}

export default App
