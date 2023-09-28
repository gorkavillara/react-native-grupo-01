import { StyleSheet } from "react-native"

export const wideScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        gap: 8,
    },
})

export const standardStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
    },
    lightText: {
        color: "#efefef",
    },
})

export const layoutStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flexGrow: 1,
        paddingTop: 30,
        gap: 32,
    },
})
