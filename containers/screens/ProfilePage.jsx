
import React from 'react'
import OngoingStreams from '../../components/OngoingStreams'
import { Text ,Surface, Button,Divider} from 'react-native-paper'
import QRCode from 'react-native-qrcode-svg';
import { useAddress } from '@thirdweb-dev/react-native';
import {
  ConnectWallet
,useDisconnect
} from '@thirdweb-dev/react-native';
import { ScrollView } from 'react-native';

const ProfilePage = ({navigation}) => {
  const address = useAddress()
  const disconnect = useDisconnect()
  return (
    <Surface mode = "flat" style = {{ flex:1, padding:16}}>

      {/* <Text> Profile </Text> */}
      <Text variant = "headlineMedium" style = {{textAlign: "center"}}> Welcome</Text>
<Surface mode = "flat" style = {{ alignItems:"center",margin:8}}>

      {/* <ConnectWallet/> */}
      <Button onPress={disconnect}>Disconnect</Button>
</Surface>
<Surface mode = "flat"  style={{margin:8,alignItems:"center"}}>

       <QRCode
   value={`supernfc://stream/${address}`}
   color={'#2C8DDB'}
   backgroundColor={'transparent'}
   size={200}
   //  logo={require('../../../embed_logo_file_path')}
   //  logo={{uri: base64logo}}
   //  logoMargin={2}
   //  logoSize={20}
   //  logoBorderRadius={10}
   //  logoBackgroundColor={'transparent'}
   />
   </Surface>
   <Surface>
    </Surface>
    <Text
       variant='titleMedium'
        style={{textAlign:"left",margin:10,}}
       >Activity History</Text>
       <Divider/>
       <ScrollView showsVerticalScrollIndicator={false} style={{
        margin:10
       }}>

<OngoingStreams/>
       </ScrollView>

    </Surface>
        // <ConnectWithWallet />
    
  )
}

export default ProfilePage