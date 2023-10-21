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
const HomePage = ({route,navigation}) => {
    
  return (
    <View>
        <Text
        style={{textAlign:"center",marginTop:10,fontSize:35,color:"black",fontWeight:"bold"}}
       >STREAM UP</Text>
        <CreateStream addRe = {route.params? `${route.params?.address}` : ""}/>
    </View>
  )
}

export default HomePage 