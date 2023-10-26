import { StyleSheet, Text, View, Pressable } from "react-native"
import React from "react"
import { Habit } from "../../../models"
import { useNotification } from "../../../hooks/useNotification"

const HabitCard = ({ habit } : { habit: Habit }) => {
    const { snoozeNotification } = useNotification()

    const snoozeCard = () => {
        // snooze
        // useNotification programar una notificaión para más adelante
        snoozeNotification(habit.text, 5)
    }
    return (
        <View style={styles.card}>
            <Text>{habit.text}</Text>
            <Pressable style={styles.button} onPress={snoozeCard}>
                <Text>Snooze</Text>
            </Pressable>
        </View>
    )
}

export default HabitCard

const styles = StyleSheet.create({
    card: {
        paddingVertical: 16
    },
    button: {
        backgroundColor: "white",
        padding: 8
    }
})
