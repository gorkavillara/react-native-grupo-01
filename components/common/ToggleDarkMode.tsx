import { Switch } from "react-native"
import React, { useContext } from "react"
import { AppContext } from "../../contexts/AppContextProvider"

const ToggleDarkMode = () => {
    const { darkMode, setDarkMode } = useContext(AppContext)
    return (
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={darkMode ? "#81b0ff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setDarkMode((prev) => !prev)}
            value={darkMode}
        />
    )
}

export default ToggleDarkMode
