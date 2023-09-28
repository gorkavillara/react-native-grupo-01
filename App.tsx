import AppContextProvider from "./contexts/AppContextProvider"
import ToggleDarkMode from "./components/common/ToggleDarkMode"
import AppLayout from "./layouts/AppLayout"
import StyledScreen from "./screens/StyledScreen"

function App() {
    return (
        <AppContextProvider>
            <AppLayout>
                <StyledScreen />
                <ToggleDarkMode />
            </AppLayout>
        </AppContextProvider>
    )
}

export default App
