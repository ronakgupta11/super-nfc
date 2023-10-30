import { GestureHandlerRootView } from 'react-native-gesture-handler'
import React from 'react';
import {
  
    localWallet,
    metamaskWallet,
    rainbowWallet,
    ThirdwebProvider,
} from '@thirdweb-dev/react-native';
import {Celo,Mumbai} from '@thirdweb-dev/chains'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import {TW_CLIENT_ID} from '@env';
import Index from './navigation/index';
import {MD3LightTheme as DefaultTheme, MD2LightTheme, PaperProvider } from 'react-native-paper';


const App = () => {

  const customTheme = {
    ...DefaultTheme,
    dark: false,
    roundness: 4,
    colors: {
      ...DefaultTheme.colors,
      primary: "#000080", // Dark Blue
      // primaryContainer: "#A2DFF8", // Light Blue
      secondary: "#F5F5F5", // Salmon
      // secondaryContainer: "#FFE4E1", // Misty Rose
      tertiary: "#008000", // Dark Slate Blue
      // tertiaryContainer: "#E0A4E3", // Lavender Purple
      surface: "#FFFFFF", // Maize
      
      // surfaceVariant: "#2A9D8F", // Viridian Green
      // surfaceDisabled: "#808080", // Gray
      background: "#FFFFFF", // Light Gray
      error: "#A52A2A", // Dark Red
      // errorContainer: "#FFD3B5", // Peach
      // onPrimary: "#FFFFFF", // White
      // onPrimaryContainer: "#000000", // Black
      // onSecondary: "#000000", // Black
      // onSecondaryContainer: "#000000", // Black
      // onTertiary: "#FFFFFF", // White
      // onTertiaryContainer: "#000000", // Black
      onSurface: "#000000", // Black
// Gray
      onError: "#FFFFFF", // White
 // Gray
    },
  };
  

  
  return (
    
    <ThirdwebProvider
    activeChain={"celo"}
    supportedChains={[Celo]}
    clientId={TW_CLIENT_ID} // uncomment this line after you set your clientId in the .env file
    supportedWallets={[metamaskWallet(), rainbowWallet(), localWallet()]}>
     
      <GestureHandlerRootView style={{ flex: 1 }}>
          <PaperProvider theme={customTheme}
           >    
<BottomSheetModalProvider>

            <Index/>
</BottomSheetModalProvider>

          </PaperProvider>
      </GestureHandlerRootView>
    </ThirdwebProvider>
 
    
  );
};

export default App;

