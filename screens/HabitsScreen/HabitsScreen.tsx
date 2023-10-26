import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    Pressable,
    FlatList
} from "react-native"
import React, { useEffect, useState } from "react"
import { useUser } from "../../hooks/useUser"
import Constants from "expo-constants"
import { useNavigation } from "@react-navigation/native"
import { standardStyles } from "../../styles"
import { useHabits } from "../../hooks/useHabits"
import HabitCard from "./components/HabitCard"
import { useNotification } from "../../hooks/useNotification"

const HabitsScreen = () => {
    useNotification()
    const navigation = useNavigation()
    const { user } = useUser()
    const { setNewHabit: setNewDBHabit, habits } = useHabits()
    const [newHabit, setNewHabit] = useState("")

    useEffect(() => {
        console.log(habits)
        if (user) return

        // @ts-ignore
        navigation.navigate("LoginScreen")
    }, [])

    return (
        <ImageBackground
            source={require("../../assets/bg.png")}
            style={[standardStyles.container, styles.mainScreen]}
        >
            <Text style={styles.welcome}>Bienvenido {user!.username}</Text>
            <Text style={styles.newHabit}>Introduce un nuevo hábito</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Tu nuevo hábito"
                    placeholderTextColor="#fff8"
                    value={newHabit}
                    onChangeText={setNewHabit}
                />
                <Pressable
                    style={styles.addHabit}
                    onPress={() => setNewDBHabit(newHabit)}
                >
                    <Text>Añadir</Text>
                </Pressable>
            </View>
            <FlatList
                data={habits}
                renderItem={(habit) => (
                    <HabitCard key={habit.index} habit={habit.item} />
                )}
            />
        </ImageBackground>
    )
}

export default HabitsScreen

const styles = StyleSheet.create({
    mainScreen: {
        paddingTop: Constants.statusBarHeight + 18,
        justifyContent: "flex-start",
        gap: 32
    },
    welcome: {
        color: "white",
        fontSize: 28,
        fontWeight: "200"
    },
    newHabit: {
        color: "white",
        fontSize: 18,
        fontWeight: "300"
    },
    inputView: {
        width: "80%",
        flexDirection: "row",
        gap: 16
    },
    textInput: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "white",
        borderWidth: 0.8,
        borderRadius: 8,
        color: "white"
    },
    addHabit: {
        backgroundColor: "white",
        borderRadius: 8,
        justifyContent: "center",
        paddingHorizontal: 16
    }
})
