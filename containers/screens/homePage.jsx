import {
    useLogout
  } from '@thirdweb-dev/react-native';
  import {
    useAddress
  } from '@thirdweb-dev/react-native';
  
import React,{useEffect,useState} from 'react';
  import {StyleSheet, Text, useColorScheme, View,Button} from 'react-native';
  import ConnectWithWallet from './ConnectWithWallet';
 import CreateStream  from '../../components/CreateStream';
const HomePage = ({navigation}) => {
    
  return (
    <View>
        <ConnectWithWallet navigation={navigation} isHome={true}/>
        <CreateStream/>
    </View>
  )
}

export default HomePage