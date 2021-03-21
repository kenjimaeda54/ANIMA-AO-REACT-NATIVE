
import React, { Component } from 'react';
import { Text, Animated,StyleSheet,View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      largura: new Animated.Value(50),
      altura: new Animated.Value(50),
    }
    Animated.timing(
      this.state.largura, {
      toValue: 300,
      duration: 2000, //milissegundo
    }

    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            marginTop:'atuo', padding:'auto',
            width: this.state.largura, height: this.state.altura,
            backgroundColor: 'blue', justifyContent:'center',alignItems:'center', 
          }}>
          <Text
            style={{ color: 'white', fontSize: 22, textAlign: 'center' }} >
            Carregando</Text>

        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

container:{
  flex: 1,
  backgroundColor: 'white'
},
});

