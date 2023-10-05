import { ScrollView, Text } from "react-native"
import React from "react"
import { products } from "../../assets/products"
import ArticleCard from "./components/ArticleCard"

const Store = () => {
    return (
        <ScrollView
            style={{
                padding: 8,
                gap: 8,
                flexDirection: "row",
                flexWrap: "wrap",
            }}
        >
            {products.map((product) => (
                <ArticleCard key={product.id} article={product} />
            ))}
        </ScrollView>
    )
}

export default Store
