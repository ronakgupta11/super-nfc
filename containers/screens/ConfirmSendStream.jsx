import React from 'react'
import { View,Text } from 'react-native'
import { Surface } from 'react-native-paper'
import StreamButton from '../../components/StreamButton'
import CancelStreamButton from '../../components/cancelStreamButton'

const ConfirmSendStream = () => {
  return (
    <Surface>
        <StreamButton/>
        <CancelStreamButton/>
    </Surface>
  )
}

export default ConfirmSendStream