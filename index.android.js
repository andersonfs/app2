import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

//Formatações
const Estilos = {
  estiloTexto: {
    fontSize: 40,
    backgroundColor: '#08509B'
    //height: 60,
    //width: 60
  },
  estiloTexto2: {
    fontSize: 40,
    backgroundColor: '#2A48FA'
    //height: 60,
    //width: 60
  },
  estiloView: {
    backgroundColor: 'skyblue',
    height: 600,
    justifyContent: 'space-around', //alinha na vertical
    alignItems: 'stretch', //alinha na horizontal
    flexDirection: 'column'
  }
};

const App = () => {
  const { estiloTexto, estiloTexto2, estiloView } = Estilos;
  
  return (
    <View style={ estiloView }>
      <Text style={ estiloTexto }>A</Text>
      <Text style={ estiloTexto2 }>B</Text>
      <Text style={ estiloTexto2 }>C</Text>
    </View>
  );
};

AppRegistry.registerComponent('app2', () =>  App);