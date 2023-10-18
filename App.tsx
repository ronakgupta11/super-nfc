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

const App = () => {
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
    color: isDarkMode ? Colors.white : Colors.black,
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
  if(hasNfc){
      return (
      
            <View style={styles.view}>
            <Text>Hello NFC</Text>
      <Text style={textStyles}>React Native thirdweb starter</Text>
      <ConnectWallet />
    </View>
          
        )

  }
  else if(!hasNfc){
      return (
          
            <View style={styles.view}>
            <Text>Your device Does Not support NFC</Text>
      <Text style={textStyles}>React Native thirdweb starter</Text>
      <ConnectWallet />
    </View>
          
        )

  }
  return(
    <>
    </>
  )

};

const styles = StyleSheet.create({
  view: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;

