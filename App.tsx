import AppContextProvider from "./contexts/AppContextProvider"
import ToggleDarkMode from "./components/common/ToggleDarkMode"
import AppLayout from "./layouts/AppLayout"
import { WindowDimensions } from "./screens"

function App() {
    return (
            <AppContextProvider>
                <AppLayout>
                    <WindowDimensions />
                    <ToggleDarkMode />
                </AppLayout>
            </AppContextProvider>
    )
}

export default App
