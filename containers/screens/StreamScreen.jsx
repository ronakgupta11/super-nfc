import React, { useRef,useMemo, useState,useEffect } from 'react';
import  {
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import {Text, Button,TextInput, useTheme, Surface} from 'react-native-paper';
import {View, Image, ScrollView, KeyboardAvoidingView} from 'react-native';

const StreamScreen = ({navigation,route}) => {
  const [address, setAddress] = useState("");
  const [streamRate, setStreamRate] = useState("");
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["50%"], []);
  const [amount, setAmount] = React.useState("");

 const theme = useTheme()


 const calculateFlow = (amount)=>{
  return Number(Math.floor(Number(Number(amount) * (10**18) / ((365/12) * 24 * 60 * 60))))
}
  const handleSendStream = () => {
    navigation.navigate('ConfirmStream',{
      addressReceiver:address,
      flowRate: calculateFlow(streamRate)
    });
  };

  useEffect(()=>{
    if(route.params?.address != undefined){
      bottomSheetModalRef.current.present()
      
    }

  },[route])
  return (
    
    // <ScrollView>
    <Surface
    mode = "flat"
      style={{
        flex:1,
        
        justifyContent:"space-evenly",
        padding:8,
      }}>
        <KeyboardAvoidingView>

          <Text variant='headlineMedium'
            style={{
              textAlign:"center",
              marginTop:15,
              marginBottom: 20,
              fontWeight:"bold"
            }}>
            Create Stream
          </Text>
          <Text
            style={{
              backgroundColor: 'rgba(16, 187, 53, 0.08)',
              marginLeft: 10,
              width: '20%',
              textAlign: 'center',
              padding: 10,
              borderRadius: 20,
              color: 'rgb(16, 187, 53)',
            }}>
            Stream
          </Text>
          <TextInput
          
            value={address}
            onChangeText={setAddress}
            placeholder="Reciever Wallet Adress"
            mode='outlined'
            style={{marginBottom: 0,
            margin:10
          }}
          />
          <Text
            style={{
              marginTop: 10,
              marginLeft:10,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Super Token
          </Text>
          <Surface mode='flat' style={{margin:10}}>
            <Surface mode = "flat" style={{ flexDirection: 'row'}}>
              <Image
                source={require('../../assets/GoodDollar.png')}
                style={{width: 30, height: 30}}
              />
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 20,
                }}>
                GoodDollar
                <Text style={{color: 'grey', fontSize: 15}}> G$</Text>
              </Text>
            </Surface>
          </Surface>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Flow Rate
          </Text>
          <TextInput
          mode='outlined'
            value={streamRate}
            onChangeText={setStreamRate}
            placeholder="0.0"
            style={{margin:10}}
          />
          <Button
            mode='contained'
            style={{width:"40%",alignSelf:"center",marginTop:10,marginBottom:10}}

            onPress={handleSendStream}
            disabled={!streamRate}>Send Stream</Button>

{ route.params?.address && <BottomSheetModal
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

       }}>{route.params.address}</Text>
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
          addressReceiver:route.params.address,
          flowRate: calculateFlow(amount)
        }
      )
      bottomSheetModalRef.current.dismiss()
      }}>Send Stream</Button>
      </Surface>
         
     </BottomSheetModal>}
          
        {/* </ScrollView> */}
  </KeyboardAvoidingView>

    </Surface>
     
  );
};

export default StreamScreen;
