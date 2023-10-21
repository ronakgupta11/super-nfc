
import React,{useEffect,useState} from 'react';
import { useAddress,
  ConnectWallet,
    localWallet,
    metamaskWallet,
    rainbowWallet,
    ThirdwebProvider,
} from '@thirdweb-dev/react-native';
import {Celo} from '@thirdweb-dev/chains'

import {TW_CLIENT_ID} from '@env';
import Index from './navigation/index';
const App = () => {
  return (
    <ThirdwebProvider
        activeChain={Celo}
        supportedChains={[Celo]}
        clientId={TW_CLIENT_ID} // uncomment this line after you set your clientId in the .env file
        supportedWallets={[metamaskWallet(), rainbowWallet(), localWallet()]}>
     <Index/>
    </ThirdwebProvider>
    
  );
};

export default App;

