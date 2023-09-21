import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SvgUri } from "react-native-svg";
import TextoSuperpuesto from "./components/TextoSuperpuesto";

const obtenLista = () => {
  const lista = [];
  for (let i = 0; i < 50000; i++) {
    lista.push("Elemento");
  }
  return lista;
};

function App() {
  // const lista = obtenLista();
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/bgImage.png")}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <TextoSuperpuesto textoPrincipal="Nuevo" textoSuperpuesto="Calcetines LIDL" />
          <TextoSuperpuesto textoPrincipal="Nuevo" textoSuperpuesto="Camisetas" />
          {/* <ScrollView horizontal={false}>
            {lista.map((el, ind) => (
              <Text key={ind}>{el}</Text>
            ))}
          </ScrollView> */}
          {/* <FlatList data={lista} renderItem={(el) => <Text>{el.item}</Text>} /> */}
          <ActivityIndicator size="large" color="#94CAFF" style={{ transform: "scale(2)" }} />
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flexGrow: 1,
    paddingTop: 20,
  },
});

export default App;
