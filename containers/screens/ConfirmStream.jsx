import React from 'react'
import { Surface,Text } from 'react-native-paper'
import StreamButton from '../../components/StreamButton'

const ConfirmStream = ({navigation,route}) => {
  return (
    <Surface>
        <Text> Confirm Stream</Text>
        <Text> {route.params.addressReceiver}</Text>
        <Text> {route.params.flowRate}</Text>
        <StreamButton navigation={navigation} receiver={route.params.addressReceiver} flowRate={route.params.flowRate}/>
    </Surface>
  )
}

export default ConfirmStream