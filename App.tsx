import { GestureHandlerRootView } from 'react-native-gesture-handler'
import React from 'react';
import {
    localWallet,
    metamaskWallet,
    rainbowWallet,
    ThirdwebProvider,
} from '@thirdweb-dev/react-native';
import {Celo,Mumbai} from '@thirdweb-dev/chains'
import  {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {TW_CLIENT_ID} from '@env';
import Index from './navigation/index';
import { PaperProvider } from 'react-native-paper';
const App = () => {
  return (
    <ThirdwebProvider
    activeChain={"celo"}
    supportedChains={[Celo]}
    clientId={TW_CLIENT_ID} // uncomment this line after you set your clientId in the .env file
    supportedWallets={[metamaskWallet(), rainbowWallet(), localWallet()]}>
      <GestureHandlerRootView style={{ flex: 1 }}>
          <PaperProvider>
            <BottomSheetModalProvider>

            <Index/>
            </BottomSheetModalProvider>
          </PaperProvider>
      </GestureHandlerRootView>
    </ThirdwebProvider>
    
  );
};

export default App;

