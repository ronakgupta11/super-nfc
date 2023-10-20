import {
    ConnectWallet,
    localWallet,
    metamaskWallet,
    rainbowWallet,
    ThirdwebProvider,
  } from '@thirdweb-dev/react-native';
  import React,{useEffect,useState} from 'react';
  import {StyleSheet, Text, useColorScheme, View} from 'react-native';
  import {Colors} from 'react-native/Libraries/NewAppScreen';
  import {TW_CLIENT_ID} from '@env';
  import  nfcManager  from 'react-native-nfc-manager';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';

  const ConnectWithWallet = () => {
    return (
        <ThirdwebProvider
        activeChain="mumbai"
        clientId={TW_CLIENT_ID} // uncomment this line after you set your clientId in the .env file
        supportedWallets={[metamaskWallet(), rainbowWallet(), localWallet()]}>
        <AppInner />
      </ThirdwebProvider>
    );
  };

  const AppInner = () => {
    const isDarkMode = useColorScheme() === 'dark';
  
    const textStyles = {
      color: "black",
      ...styles.heading,
    };
  
  
  
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
               style={{color:"red",margin:20}}
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
      margin:30
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  });
  
  export default ConnectWithWallet;