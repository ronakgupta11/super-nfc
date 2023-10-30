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
import { useColorScheme } from 'react-native';

const App = () => {

  const colorScheme = useColorScheme();
  const colors =  {
  light: {
        "primary": "rgb(19, 83, 216)",
        "onPrimary": "rgb(255, 255, 255)",
        "primaryContainer": "rgb(219, 225, 255)",
        "onPrimaryContainer": "rgb(0, 23, 77)",
        "secondary": "rgb(29, 95, 166)",
        "onSecondary": "rgb(255, 255, 255)",
        "secondaryContainer": "rgb(212, 227, 255)",
        "onSecondaryContainer": "rgb(0, 28, 58)",
        "tertiary": "rgb(114, 51, 223)",
        "onTertiary": "rgb(255, 255, 255)",
        "tertiaryContainer": "rgb(234, 221, 255)",
        "onTertiaryContainer": "rgb(37, 0, 90)",
        "error": "rgb(186, 26, 26)",
        "onError": "rgb(255, 255, 255)",
        "errorContainer": "rgb(255, 218, 214)",
        "onErrorContainer": "rgb(65, 0, 2)",
        "background": "rgb(254, 251, 255)",
        "onBackground": "rgb(27, 27, 31)",
        "surface": "rgb(254, 251, 255)",
        "onSurface": "rgb(27, 27, 31)",
        "surfaceVariant": "rgb(226, 225, 236)",
        "onSurfaceVariant": "rgb(69, 70, 79)",
        "outline": "rgb(118, 118, 128)",
        "outlineVariant": "rgb(198, 198, 208)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(48, 48, 52)",
        "inverseOnSurface": "rgb(242, 240, 244)",
        "inversePrimary": "rgb(181, 196, 255)",
        "elevation": {
          "level0": "transparent",
          "level1": "#ffffff",
          "level2": "rgb(235, 238, 252)",
          "level3": "rgb(228, 233, 251)",
          "level4": "rgb(226, 231, 250)",
          "level5": "rgb(221, 228, 250)"
        },
        "surfaceDisabled": "rgba(27, 27, 31, 0.12)",
        "onSurfaceDisabled": "rgba(27, 27, 31, 0.38)",
        "backdrop": "rgba(46, 48, 56, 0.4)"
      },
      dark: {
        "primary": "rgb(181, 196, 255)",
        "onPrimary": "rgb(0, 41, 122)",
        "primaryContainer": "rgb(0, 61, 171)",
        "onPrimaryContainer": "rgb(219, 225, 255)",
        "secondary": "rgb(165, 200, 255)",
        "onSecondary": "rgb(0, 49, 94)",
        "secondaryContainer": "rgb(0, 71, 133)",
        "onSecondaryContainer": "rgb(212, 227, 255)",
        "tertiary": "rgb(210, 188, 255)",
        "onTertiary": "rgb(62, 0, 142)",
        "tertiaryContainer": "rgb(89, 0, 199)",
        "onTertiaryContainer": "rgb(234, 221, 255)",
        "error": "rgb(255, 180, 171)",
        "onError": "rgb(105, 0, 5)",
        "errorContainer": "rgb(147, 0, 10)",
        "onErrorContainer": "rgb(255, 180, 171)",
        "background": "rgb(27, 27, 31)",
        "onBackground": "rgb(228, 226, 230)",
        "surface": "rgb(27, 27, 31)",
        "onSurface": "rgb(228, 226, 230)",
        "surfaceVariant": "rgb(69, 70, 79)",
        "onSurfaceVariant": "rgb(198, 198, 208)",
        "outline": "rgb(143, 144, 154)",
        "outlineVariant": "rgb(69, 70, 79)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(228, 226, 230)",
        "inverseOnSurface": "rgb(48, 48, 52)",
        "inversePrimary": "rgb(19, 83, 216)",
        "elevation": {
          "level0": "transparent",
          "level1": "rgb(35, 35, 42)",
          "level2": "rgb(39, 41, 49)",
          "level3": "rgb(44, 46, 56)",
          "level4": "rgb(46, 47, 58)",
          "level5": "rgb(49, 51, 62)"
        },
        "surfaceDisabled": "rgba(228, 226, 230, 0.12)",
        "onSurfaceDisabled": "rgba(228, 226, 230, 0.38)",
        "backdrop": "rgba(47, 48, 56, 0.4)"
      }
    }
  ;
  
  const paperTheme =
   
       {...DefaultTheme, colors: colors.light }
     
  
  return (
    
    <ThirdwebProvider
    activeChain={"celo"}
    supportedChains={[Celo]}
    clientId={TW_CLIENT_ID} // uncomment this line after you set your clientId in the .env file
    supportedWallets={[metamaskWallet(), rainbowWallet(), localWallet()]}>
     
      <GestureHandlerRootView style={{ flex: 1 }}>
          <PaperProvider theme={paperTheme}
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

