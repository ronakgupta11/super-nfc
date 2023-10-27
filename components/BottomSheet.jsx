import React, { useRef,useMemo } from 'react';
import  {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {  View} from 'react-native';
import {Button,Text,Surface,TextInput, Divider} from "react-native-paper"
import { useTheme } from 'react-native-paper'
const BottomSheetE = ({navigation,address}) => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["50%"], []);
  const [amount, setAmount] = React.useState("");

  const calculateFlow = (amount)=>{
    return Math.floor(Number(Number(amount) * (10**18) / ((365/12) * 24 * 60 * 60)))
  }
 const theme = useTheme()
  return (
    <View>

    <Button onPress={()=>bottomSheetModalRef.current.present()}>Open</Button>
    <BottomSheetModal
    backgroundStyle={{
      backgroundColor:theme.colors.background
    }}
    handleIndicatorStyle={{
      backgroundColor:theme.colors.onSurface
    }}
    containerStyle={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
      
    }}
       ref={bottomSheetModalRef}
       index={0}
       snapPoints={snapPoints}
       
     >
      <Surface mode='flat'  style={{
        padding:4,
        flex:1,
        alignItems:"center",
        justifyContent:"space-around"
      }}>

       <Surface mode='flat'style={{
        margin:8,

       }} >
        <Text variant='bodyLarge'
        style={{
          margin:8
        }}
        >Sending stream to:</Text>
        {/* <Divider/> */}
        <Surface elevation={1} style={
          {
            backgroundColor:theme.colors.primaryContainer,
            borderRadius:10,
            margin:4,
            padding: 4,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
          }
        }>

       <Text style={{
        margin:3,
        fontStyle:"italic"

       }}>{address}</Text>
        </Surface>
       </Surface>
       <Surface  mode='flat' style={{flexDirection:'row',
      alignItems:"center",
      justifyContent:"space-around",
      padding:8,
      width:"100%"

      
      }}>

       <TextInput
      mode='outlined'
      label="Amount"
      value={amount}
      style={{
        width:"60%"
      }}
      onChangeText={amount => setAmount(amount)}
      
      />
      <Text>/Month</Text>
      </Surface>
      <Button style={{
        margin:4,
        width:"100%"
      }} mode='contained' onPress={()=>{navigation.navigate(
        "ConfirmStream",{
          addressReceiver:address,
          flowRate: calculateFlow(amount)
        }
      )
      bottomSheetModalRef.current.dismiss()
      }}>Send Stream</Button>
      </Surface>
         
     </BottomSheetModal>
    </View>
  );
};
export default BottomSheetE