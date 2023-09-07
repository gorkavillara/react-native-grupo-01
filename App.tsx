/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {View, Text, Alert, Button, TouchableOpacity} from 'react-native';

function App() {
  const [contador, setContador] = useState(0);
  // const handlePress = () => {
  //   let i = 30;

  //   console.log(i);

  //   Alert.alert('Hola mundo');
  // };
  const sumaContador = () => {
    // setContador(contador + 1);
    // setContador(contador + 1);
    // setContador(contador + 1);
    let i = 0;

    i++;
    console.log(contador);
    setContador(anterior => anterior + 1);
    setContador(anterior => anterior + 1);
    setContador(anterior => anterior + 1);
  };

  const restaContador = () => setContador(contador - 1);

  // let valor = 1;
  // const sumaValor = () => {
  //   valor++;
  //   console.log(valor);
  // };
  // const restaValor = () => valor--;

  return (
    <>
      {/* <View>
        <Text style={{color: '#fdfdfd'}}>Hola mundo</Text>
        <Button title="Press Me" onPress={handlePress} />
      </View> */}
      <View>
        <Text style={{fontSize: 24, textAlign: 'center'}}>
          Contador con React Native
        </Text>
      </View>
      <View>
        <Text style={{fontSize: 16, textAlign: 'center'}}>
          Valor del contador: {contador}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 8}}>
          <TouchableOpacity
            onPress={restaContador}
            style={{padding: 8, backgroundColor: '#fafafafa', borderRadius: 8}}>
            <Text>Menos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={sumaContador}
            style={{padding: 8, backgroundColor: '#fafafafa', borderRadius: 8}}>
            <Text>Más</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default App;
