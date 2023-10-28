// import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Button, Card, Text} from 'react-native-paper';
import { Image } from 'react-native';
import React from 'react'
import { useTheme } from 'react-native-paper';

const HomeBanner = () => {
    const theme = useTheme()

  return (
    <Card style={
        {
            backgroundColor:theme.colors.secondaryContainer,
            margin:3,
            justifyContent:"center",
            alignItems:"center"
        }
    }  >
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Content>
      {/* <Text variant="titleLarge">Card title</Text> */}
      <Image 
       style={{height:250,width:"110%",alignSelf:"center"}}
      source={require('../assets/NFC-Animation.gif')}/>
      <Text
       style={{marginBottom:5}}
      >Bring Your NFC Token Closer For Auto Scan</Text>
    </Card.Content>
    
    
  </Card>
  )
}

export default HomeBanner

