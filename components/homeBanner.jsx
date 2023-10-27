// import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import React from 'react'
import { useTheme } from 'react-native-paper';
const HomeBanner = () => {
    const theme = useTheme()

  return (
    <Card style={
        {
            backgroundColor:theme.colors.secondaryContainer,
            margin:3
        }
    }  >
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Content>
      {/* <Text variant="titleLarge">Card title</Text> */}
      <Text variant="bodyMedium" >Card content</Text>
    </Card.Content>
    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
    <Card.Actions>
      <Button mode='text' >Create Stream</Button>
      
    </Card.Actions>
  </Card>
  )
}

export default HomeBanner

