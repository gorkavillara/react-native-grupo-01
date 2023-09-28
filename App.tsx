import { StyleSheet, View, ImageBackground, Button, Switch } from "react-native"
import { Contador, HPSearch, ContadorMejorado, ListaTareas } from "./screens"
import AppContextProvider from "./contexts/AppContextProvider"
import ToggleDarkMode from "./components/common/ToggleDarkMode"
import ContadorGlobal from "./screens/ContadorGlobal"
import ContadorIndividual from "./screens/ContadorIndividual"
import ContadorConHook from "./screens/ContadorConHook"
import RMFetch from "./screens/RMFetch"
import RMFetchConHook from "./screens/RMFetchConHook"
import Inputs from "./screens/Inputs"

function App() {
    return (
        <AppContextProvider>
            <View style={styles.container}>
                <ImageBackground
                    source={require("./assets/bgImage.png")}
                    resizeMode="cover"
                    style={styles.imageBackground}
                >
                    {/* <Contador /> */}
                    {/* {muestraHP && <HPSearch />} */}
                    {/* <Button
                        title={muestraHP ? "Oculta HP" : "Muestra HP"}
                        onPress={() => setMuestraHP((prev) => !prev)}
                    /> */}
                    {/* <ContadorMejorado /> */}
                    {/* <ListaTareas /> */}
                    {/* <ContadorGlobal /> */}
                    {/* <ContadorIndividual /> */}
                    {/* <ContadorConHook /> */}
                    {/* <RMFetch /> */}
                    {/* <RMFetchConHook /> */}
                    <Inputs />
                    <ToggleDarkMode />
                </ImageBackground>
            </View>
        </AppContextProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flexGrow: 1,
        paddingTop: 30,
        gap: 32,
    },
})

export default App
