import {
    useLogout
  } from '@thirdweb-dev/react-native';
  import {
    useAddress
  } from '@thirdweb-dev/react-native';
  
import React,{useEffect,useState} from 'react';
  import {StyleSheet, Text, useColorScheme, View,Button,ScrollView} from 'react-native';
  import ConnectWithWallet from './ConnectWithWallet';
 import CreateStream  from '../../components/CreateStream';
const HomePage = ({route,navigation}) => {
    
  return (
    <ScrollView>
        <Text
        style={{textAlign:"center",marginTop:10,fontSize:35,color:"black",fontWeight:"bold"}}
       >STREAM UP</Text>
       
        <CreateStream addRe = {route.params? `${route.params?.address}` : ""}/>
       
    </ScrollView>
  )
}

export default HomePage 