import React,{useState} from 'react';
import {View, Form, Button,Image,TextInput} from 'react-native';
import {Text} from 'react-native-elements';
import {Card, Input, Box} from '@rneui/themed';

const CreateStream = () => {
    const [address,setAddress]=useState()
    const [streamRate,setStreamRate]=useState()

    const handleSendStream = ()=>{

    }
  return (
    <View>
      <Card>
        <Text
         style={{fontSize:20,
            backgroundColor: 'black',
            width: '50%',
            alignSelf:"center",
            textAlign: 'center',
            padding: 10,
            borderRadius: 20,
            color: 'white',
            marginTop:0,
            marginBottom:20
        }}
        >Create Stream</Text>
        <Text
          style={{
            backgroundColor: 'rgba(16, 187, 53, 0.08)',
            marginLeft:10,
            width: '20%',
            textAlign: 'center',
            padding: 10,
            borderRadius: 20,
            color: 'rgb(16, 187, 53)',
          }}>
          Stream
        </Text>
        <Input
         value={address}
         onChangeText={setAddress}
        placeholder="Reciever Wallet Adress" 
        style={{marginBottom:0}}
        />
        <Text 
         style={{
            marginLeft:10,
            fontSize:20,
            fontWeight:"bold"
         }}
        >Super Token</Text>
        <Card  >
         <View style={{display:"flex",flexDirection:"row"}}>
         <Image
          source={require('../assets/GoodDollar.png')}
          style={{width:30,height:30}}
         />
         <Text
          style={
            {
                fontSize:20,
                marginLeft:20
            }
          }
         >GoodDollar 
          <Text style={{color:"grey",fontSize:15}}> G$</Text>
         </Text>
         </View>
        
        </Card>
        <Text 
         style={{
            marginLeft:10,
            fontSize:20,
            fontWeight:"bold",
            marginTop:10
         }}
        >Flow Rate</Text>
        <Input
         value={streamRate}
         onChangeText={setStreamRate}
        placeholder="0.0" 
        style={{}}
        />
        <Button
       title='Send Stream'
       onPress={handleSendStream}
       disabled={!streamRate}
      />
      </Card>
      <Text>{address}</Text>
      
    </View>
  );
};

export default CreateStream;
