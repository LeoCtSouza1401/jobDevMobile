import React from "react";
import {ScrollView,View, Text, Image, TouchableOpacity} from 'react-native'
import{styles} from './styles'

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo}/>
      <Text style={styles.h1}> Tela de login </Text>
      <Text style={styles.h2}> Bem Vindo(a)! Digite seus dados abaixo.</Text>
      </View>
    </ScrollView>
  );
}

export default App;