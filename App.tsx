import AppContextProvider from "./contexts/AppContextProvider"
import ToggleDarkMode from "./components/common/ToggleDarkMode"
import AppLayout from "./layouts/AppLayout"
import ImageResponsive from "./components/ImageResponsive"

function App() {
    return (
            <AppContextProvider>
                <AppLayout>
                    <ImageResponsive />
                    <ToggleDarkMode />
                </AppLayout>
            </AppContextProvider>
    )
}

export default App
