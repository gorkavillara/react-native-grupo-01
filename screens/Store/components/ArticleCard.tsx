import { StyleSheet, Text, View, Image, Pressable } from "react-native"
import React from "react"
import { Article } from "../../../models"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StackScreens } from "../../../stacks/StoreStack"

const ArticleCard = ({ article }: { article: Article }) => {
    const navigation = useNavigation<NativeStackScreenProps<StackScreens, "Details">>()

    const redirectToDetails = () => {
        // Redireccionarlo al details de el id en concreto
        // @ts-ignore
        navigation.navigate("Details", { itemId: article.id })
    }
    return (
        <View style={styles.card}>
            <Image source={{ uri: article.image }} />
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.price}>$ {article.price}</Text>
            <Pressable style={styles.button} onPress={redirectToDetails}>
                <Text style={styles.buttonText}>Show More</Text>
            </Pressable>
        </View>
    )
}

export default ArticleCard

const styles = StyleSheet.create({
    card: {
        overflow: "hidden",
        width: 150,
        borderWidth: 1,
        borderColor: "#8888",
        borderRadius: 8,
        gap: 8,
    },
    title: {
        fontWeight: "600",
        fontSize: 16,
        textAlign: "center",
    },
    price: {
        textAlign: "right",
        marginHorizontal: 8,
    },
    button: {
        paddingVertical: 6,
        backgroundColor: "black",
    },
    buttonText: {
        textAlign: "center",
        color: "white",
    },
})
