// import { StyleSheet, Text, View } from 'react-native'
import {Surface, Card, Text} from 'react-native-paper';
import { Image } from 'react-native';
import React from 'react'
import { useTheme } from 'react-native-paper';

const HomeBanner = () => {
    const theme = useTheme()

  return (
    <Surface mode='flat' style={
        {
           
            padding:8,
            justifyContent:"center",
            alignItems:"center"
        }
    }  >


      <Image 
       style={{height:250,alignSelf:"center"}}
       source={require('../assets/NFC-Animation.gif')}/>
      <Text variant='titleMedium'
       style={{marginBottom:5}}
       >Bring Your NFC Token Closer For Auto Scan</Text>

   
    
    
  </Surface>
  )
}

export default HomeBanner

