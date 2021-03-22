
import React, { Component } from 'react';
import { Text, Animated, StyleSheet, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      largura: new Animated.Value(250),
      altura: new Animated.Value(50),
      opacidade: new Animated.Value(0)
    }

    //Animação em sequencia segue uma ordem decrecente,do primeiro ate o final,
    //Animação em paralelo segue geral,todas propriedades e acionada .
    Animated.sequence([
      Animated.timing(
        this.state.opacidade, {
        toValue: 1,
        duration: 3900,
      }
      ),
      Animated.parallel([
        Animated.timing(
          this.state.largura, {
          toValue: 380,
          duration: 3900,
        }
        ),
        Animated.timing(
          this.state.altura, {
          toValue: 200,
          duration: 3900,
        }
        ),
      ]),
      //ao sair do array do parelo ja entra no seguencial,ou seja abaixo e tudo
      //seguencial
      Animated.timing(
        this.state.opacidade, {
        toValue: 0,
        duration: 3000,
      }
      )
    ]).start();




    // Aqui e uma animação simples
    Animated.timing(
      this.state.altura, {
      toValue: 300,
      duration: 4500, //milis segundos
    }
    ).start();
  
  

  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{
          justifyContent: "center",
          width: this.state.largura,
          height: this.state.altura,
          margin: 'auto',
          padding: 'auto', backgroundColor: "blue",
          opacity: this.state.opacidade,
        }}>

          <Text
            style={styles.texto} >
            Carregando
            </Text>

        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
});

