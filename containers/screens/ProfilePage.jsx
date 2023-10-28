
import ConnectWithWallet from './ConnectWithWallet'
import React from 'react'
import { Surface, Text } from 'react-native-paper'
import { ScrollView } from 'react-native'
import OngoingStreams from '../../components/OngoingStreams'

const ProfilePage = () => {
  return (
    <Surface>
      <ScrollView style={{ margin:10}}>
<OngoingStreams/>
  </ScrollView>
    </Surface>
        
        
    
  )
}

export default ProfilePage