import { View, Text, Pressable } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { products } from "../assets/products"
import Icon from "react-native-vector-icons/Ionicons"
import React from "react"
import { StackScreens } from "../navigation/stacks/StoreStack"

const Details = ({
    route,
    navigation,
}: NativeStackScreenProps<StackScreens, "Details">) => {
    const { itemId } = route.params
    const product = products.find((prod) => prod.id === itemId)
    if (!product)
        return (
            <View>
                <Text>No hay producto!</Text>
            </View>
        )

    navigation.setOptions({ title: product.title })
    return (
        <>
            <View style={{ flex: 1 }}>
                <Text>{product.title}</Text>
            </View>
            <Pressable
                style={{
                    backgroundColor: "#cecece",
                    paddingVertical: 16,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 16,
                }}
                onPress={() => navigation.goBack()}
            >
                <Icon name="arrow-back-outline" size={20} />
                <Text style={{ textAlign: "center" }}>Go Back</Text>
            </Pressable>
        </>
    )
}

export default Details
