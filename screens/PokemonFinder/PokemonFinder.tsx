import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    Button,
} from "react-native"
import { useRecoilState, useRecoilValue } from "recoil"
import { standardStyles } from "../../styles"
import { pokemonDetails, pokemonId } from "../../app/pokemonState"
import { useState, Suspense } from "react"

const PokemonFinder = () => {
    const [pokeId, setPokeId] = useRecoilState(pokemonId)
    // const pokeDetails = useRecoilValue(pokemonDetails)

    const [inputValue, setInputValue] = useState(
        pokeId ? pokeId.toString() : "0"
    )

    const buscarPoke = () => {
        setPokeId(Number(inputValue))
    }

    // console.log(pokeDetails)
    return (
        <ImageBackground
            source={require("../../assets/PokeBg.jpg")}
            style={standardStyles.container}
        >
            <View
                style={[
                    standardStyles.container,
                    { backgroundColor: "#fffd", width: "100%" },
                ]}
            >
                <Suspense
                    fallback={
                        <View>
                            <Text>Cargando...</Text>
                        </View>
                    }
                >
                    <Text style={standardStyles.text}>
                        Introduce un id de pokemon
                    </Text>
                    <TextInput
                        style={standardStyles.text}
                        value={inputValue}
                        onChangeText={setInputValue}
                    />
                    <Button title="Buscar Poke" onPress={buscarPoke} />
                </Suspense>
            </View>
        </ImageBackground>
    )
}

export default PokemonFinder

const styles = StyleSheet.create({})
