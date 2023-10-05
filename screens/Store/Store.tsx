import { ScrollView, Text, FlatList } from "react-native"
import React from "react"
import { products } from "../../assets/products"
import ArticleCard from "./components/ArticleCard"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Details from "../Details"

type ProductStackType = {
    StoreList: undefined
    Details: { itemId: number }
}

const ProductStack = createNativeStackNavigator<ProductStackType>()

const StoreList = () => (
    <FlatList
        numColumns={2}
        data={products}
        renderItem={(product) => <ArticleCard article={product.item} />}
    />
)

const Store = () => {
    return (
        <ProductStack.Navigator>
            <ProductStack.Screen name="StoreList" component={StoreList} options={{ headerShown: false }} />
            <ProductStack.Screen name="Details" component={Details} />
        </ProductStack.Navigator>
    )
}

export default Store
