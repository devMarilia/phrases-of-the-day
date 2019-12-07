/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//import
import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, Alert} from 'react-native';

const gerarNovaFrase = () => {
  
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio *5);

  var frases = Array();
  frases[0] = 'Não importa a cor do céu. Quem faz o dia bonito é você.';
  frases[1] = 'Enquanto o dia semeia sonhos, a noite rega a esperança.';
  frases[2] = 'Quanto mais agradecemos, mais coisas boas acontecem.';
  frases[3] = 'Não coloque limites em seus sonhos, coloque fé.';
  frases[4] = 'Nem tudo na vida são flores, mas quando for, regue.';
  console.log('lalala', frases)
  var fraseEscolhida = frases[numeroAleatorio];
  Alert.alert(fraseEscolhida);
  console.log('oiiii', numeroAleatorio)
}

//Criar componente
const App = () => {

  const {principal, botao, textoBotao} = styles
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={principal}>
      <Image source={require('./assets/logo.png')}/>
      <TouchableOpacity
       onPress={gerarNovaFrase}
       style={botao}>
        <Text style={textoBotao}>Nova frase</Text>
      </TouchableOpacity>
      </View>
    </>
  );
};
//formaração de estilo 
const styles = StyleSheet.create({
    principal: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
    },
    botao: {
      backgroundColor: '#538530',
      paddingVertical: 10,
      paddingHorizontal: 40,
      marginTop: 20
    },
    textoBotao: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
    }

});

export default App;
