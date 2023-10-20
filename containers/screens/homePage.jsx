
import React,{useEffect,useState} from 'react';
  import {StyleSheet, Text, useColorScheme, View} from 'react-native';
  import ConnectWithWallet from './ConnectWithWallet';
const HomePage = () => {
  return (
    <View>
        <Text>Home Page</Text>
        <ConnectWithWallet/>
    </View>
  )
}

export default HomePage