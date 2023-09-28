import AppContextProvider from "./contexts/AppContextProvider"
import ToggleDarkMode from "./components/common/ToggleDarkMode"
import AppLayout from "./layouts/AppLayout"
import { PaperProvider } from "react-native-paper"
import StyledScreen from "./screens/StyledScreen"
import PaperScreen from "./screens/PaperScreen"

function App() {
    return (
        <PaperProvider>
            <AppContextProvider>
                <AppLayout>
                    {/* <StyledScreen /> */}
                    <PaperScreen />
                    <ToggleDarkMode />
                </AppLayout>
            </AppContextProvider>
        </PaperProvider>
    )
}

export default App
