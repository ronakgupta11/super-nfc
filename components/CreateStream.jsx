import React, {useState, useEffect, useRef} from 'react';
import {Text, Button, Card, TextInput, useTheme, Surface} from 'react-native-paper';
import {View, Image, ScrollView, KeyboardAvoidingView} from 'react-native';
// import {Text} from 'react-native-elements';
// import {Card, Input, Box} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

import BottomSheetE from './BottomSheet';

const CreateStream = () => {
  const [address, setAddress] = useState("");
  const [streamRate, setStreamRate] = useState("");
  const navigation = useNavigation();
  const calculateFlow = (amount)=>{
    return Number(Number(amount) * (10**18) / ((365/12) * 24 * 60 * 60))
  }
  const handleSendStream = () => {
    navigation.navigate('ConfirmStream',{
      addressReceiver:address,
      flowRate: calculateFlow(streamRate)
    });
  };
  return (
    <Card
      style={{
        borderRadius: 20,
        width: '95%',
        alignSelf: 'center',
        marginTop:20,
        backgroundColor:"white",
        
      }}>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <Text
            style={{
              fontSize: 20,
              width: '50%',
              alignSelf: 'center',
              textAlign: 'center',
              padding: 10,
              borderRadius: 20,
              marginTop: 0,
              marginBottom: 20,
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
            style={{marginBottom: 0,backgroundColor:"white",
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
          <Card style={{margin:10}}>
            <View style={{display: 'flex', flexDirection: 'row',backgroundColor:"white"}}>
              <Image
                source={require('../assets/GoodDollar.png')}
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
            </View>
          </Card>
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
            style={{backgroundColor:"white",margin:10}}
          />
          <Button
            mode='contained'
            style={{width:"40%",alignSelf:"center",marginTop:10,marginBottom:10}}
          mode='contained'
            
            onPress={handleSendStream}
            disabled={!streamRate}>Send Stream</Button>
          
        </ScrollView>
  <BottomSheetE navigation={navigation} address={"0xD7D98e76FcD14689F05e7fc19BAC465eC0fF4161"}/>

      </KeyboardAvoidingView>
    </Card>
  );
};

export default CreateStream;
