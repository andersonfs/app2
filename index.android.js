import React from 'react';
import { Text, View, AppRegistry, Image, TouchableOpacity, Alert } from 'react-native';

//Formatações
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 40
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }

};
var frases = Array();
frases[0] = 'Enquanto houver um coração infantil, o Vasco será imortal!';
frases[1] = 'Não tenha pena dos mortos, tenha pena dos vivos, e principalmente do que vivem sem amor!';
frases[2] = 'As vezes a cura está na consciência limpa!';
frases[3] = 'Nada como um dia após o outro!';
frases[4] = 'Mais vale um tolo espirituoso do que um espírito tolo!';
frases[5] = 'A verdade vos salvará!';

var indiceAnterior = 0;
var primeiraExecucao = true;

const gerarNovaFrase = () => {
  

  indice = gerarIndice();
  while(indice == indiceAnterior && !primeiraExecucao) {
    indice = gerarIndice();
  }
  fraseEscolhida = frases[indice];
  indiceAnterior = indice;
  primeiraExecucao = false;
  Alert.alert(fraseEscolhida);

}

const gerarIndice = () => {
  var indice = Math.random();
  return indice = Math.floor(indice * 6);  
}

const App = () => {
  const { principal, botao, textoBotao } = Estilos;
  
  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />
      <TouchableOpacity 
        onPress={gerarNovaFrase}
        style={botao}>
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('app2', () =>  App);