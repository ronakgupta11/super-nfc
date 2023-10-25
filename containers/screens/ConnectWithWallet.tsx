import {
    ConnectWallet,
    localWallet,
    metamaskWallet,
    rainbowWallet,
    ThirdwebProvider,
    useAddress,
    darkTheme
  } from '@thirdweb-dev/react-native';
  import React,{useEffect,useState} from 'react';
  import {StyleSheet, Text, useColorScheme, View,Button} from 'react-native';
  import {Colors} from 'react-native/Libraries/NewAppScreen';
  import {TW_CLIENT_ID} from '@env';
  import  nfcManager  from 'react-native-nfc-manager';
import { colors } from 'react-native-elements';
  

  const ConnectWithWallet = () => {
    return (
        <AppInner  />
    );
  };

  const AppInner = () => {

    const isDarkMode = useColorScheme() === 'dark';
  
    const textStyles = {
      color: "black",
      ...styles.heading,
    };
  
    const customDarkTheme:any = darkTheme({
        buttonBackgroundColor:"black",
        buttonTextColor:"white"
    });
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
        <ConnectWallet theme={customDarkTheme} />
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