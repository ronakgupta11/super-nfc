import {
    ConnectWallet,
    localWallet,
    metamaskWallet,
    rainbowWallet,
    ThirdwebProvider,
    useAddress
  } from '@thirdweb-dev/react-native';
  import React,{useEffect,useState} from 'react';
  import {StyleSheet, Text, useColorScheme, View,Button} from 'react-native';
  import {Colors} from 'react-native/Libraries/NewAppScreen';
  import {TW_CLIENT_ID} from '@env';
  import  nfcManager  from 'react-native-nfc-manager';
  

  const ConnectWithWallet = ({navigation,isHome}:{navigation:any,isHome:any}) => {
    return (
        <ThirdwebProvider
        activeChain="mumbai"
        clientId={TW_CLIENT_ID} // uncomment this line after you set your clientId in the .env file
        supportedWallets={[metamaskWallet(), rainbowWallet(), localWallet()]}>
        <AppInner navigation={navigation} isHome={isHome} />
      </ThirdwebProvider>
    );
  };

  const AppInner = ({navigation,isHome}:{navigation:any,isHome:any}) => {

    const isDarkMode = useColorScheme() === 'dark';
  
    const textStyles = {
      color: "black",
      ...styles.heading,
    };
  
    const address = useAddress();

    useEffect(()=>{
      if(address && !isHome)
      {
        console.log(address)
         navigation.replace("Home")
      }
      
    },[address])
  
    const [hasNfc,setHasNFC] = useState<any>(true);
    useEffect(()=>{
        async function checkNFC(){
            const supported = await nfcManager.isSupported()
            if(supported){
                await nfcManager.start()
            }
            setHasNFC(supported)
        }
  
        checkNFC()
  
    },[])
        return (
              <View style={styles.view}>
        <ConnectWallet />
        <Text
               style={{color:"red",margin:10}}
              >{hasNfc?"Hello NFC":"Your Device Dosent Support NFC"}</Text>
      </View> 
          )

  };

  const styles = StyleSheet.create({
    view: {
      color:"black",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      marginTop:15
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  });
  
  export default ConnectWithWallet;