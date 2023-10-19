import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    Button,
    ActivityIndicator,
} from "react-native"
import {
    useRecoilState,
    useRecoilValue,
    useRecoilValueLoadable,
    useSetRecoilState,
} from "recoil"
import { standardStyles } from "../../styles"
import { pokemonDetails, pokemonId } from "../../app/pokemonState"
import { useState, Suspense } from "react"

const PokemonFinder = () => {
    const [pokeId, setPokeId] = useRecoilState(pokemonId)
    // Hook para gestionar estados asíncronos
    const pokeDetails = useRecoilValueLoadable(pokemonDetails)
    // TODO: Error handling con Recoil
    
    console.log(pokeDetails.state)

    const [inputValue, setInputValue] = useState(
        pokeId ? pokeId.toString() : "0"
    )

    const buscarPoke = () => {
        setPokeId(Number(inputValue))
    }

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
                <Text style={standardStyles.text}>
                    Introduce un id de pokemon
                </Text>
                <TextInput
                    style={standardStyles.text}
                    value={inputValue}
                    onChangeText={setInputValue}
                />
                <Button title="Buscar Poke" onPress={buscarPoke} />
                {pokeDetails.state === "loading" && <ActivityIndicator />}
                {pokeDetails.state === "hasError" && (
                    <Text>Error: {pokeDetails.contents}</Text>
                )}
                {pokeDetails.state === "hasValue" && pokeDetails.contents && (
                    <View style={{ paddingVertical: 16, gap: 16 }}>
                        <Text
                            style={{
                                fontSize: 24,
                                textTransform: "capitalize",
                            }}
                        >
                            {pokeDetails.contents.name}
                        </Text>
                        <Image
                            source={{
                                uri: pokeDetails.contents.sprites.front_default,
                            }}
                            style={{ width: 120, height: 120 }}
                        />
                    </View>
                )}
            </View>
        </ImageBackground>
    )
}

export default PokemonFinder

const styles = StyleSheet.create({})
