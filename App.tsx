import React from "react";
import {ScrollView,View, Text, Image, TouchableOpacity} from 'react-native'
import{styles} from './styles'

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <view style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo}/>
      </view>
    </ScrollView>
  );
}

export default App;