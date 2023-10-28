
import ConnectWithWallet from './ConnectWithWallet'
import React from 'react'
import { Text ,Surface, Button} from 'react-native-paper'
import QRCode from 'react-native-qrcode-svg';
import { useAddress } from '@thirdweb-dev/react-native';
import {
  ConnectWallet,
  darkTheme
} from '@thirdweb-dev/react-native';

const ProfilePage = ({navigation}) => {
  const address = useAddress()
  return (
    <Surface mode = "flat" style = {{padding:16, alignItems:"center",justifyContent:"center"}}>

      {/* <Text> Profile </Text> */}
      <Text variant = "headlineMedium" style = {{textAlign: "center"}}> Welcome</Text>
<Surface mode = "flat" style = {{ alignItems:"center",margin:8}}>

      <ConnectWallet/>
</Surface>
<Surface mode = "flat"  style={{margin:8}}>

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
  {/* <Button onPress={()=>navigation.navigate("Scanner")}>sacn</Button> */}
    </Surface>
        // <ConnectWithWallet />
    
  )
}

export default ProfilePage