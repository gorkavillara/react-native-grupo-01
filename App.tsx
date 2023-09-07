import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import Input from "./components/common/Input";
import SubmitButton from "./components/common/SubmitButton";

function App() {
  const loginHandle = () => {
    console.log("Login")
    Alert.alert("Has hecho Login")
  }
  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Login</Text>
        <Text style={styles.descripcion}>
          Haz login para entrar en la aplicación
        </Text>
      </View>
      <Input label="Email" placeholder="Escribe tu email" />
      <Input label="Contraseña" placeholder="Tu contraseña" />
      <SubmitButton title="Login" onPress={loginHandle} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    marginTop: Constants.statusBarHeight,
    gap: 16
  },
  tituloContainer: {
    gap: 8
  },
  texto: {
    color: "blue",
    fontSize: 32,
  },
  titulo: {
    color: "#4b4b4b",
    fontSize: 40,
    fontWeight: "600",
  },
  descripcion: {
    color: "#9d9d9d",
  },
});

export default App;
