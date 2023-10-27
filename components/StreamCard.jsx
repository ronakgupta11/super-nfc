import { Text} from 'react-native-paper'
import {View,Image} from "react-native"
import React from 'react'
import CancelStreamButton from './cancelStreamButton'
import { useNavigation } from '@react-navigation/native'
// import {Icon } from '@rneui/themed';
const StreamCard = ({address,time,streamRate}) => {
  const navigation = useNavigation()
  return (
    <View style={{justifyContent:"center"}}>
       
        <View style={{flexDirection:"row",width:"100%",marginBottom:15,marginTop:15}}>
     
     <View style={{flexDirection:"row",alignItems:"center",flex:1.5}}>
     <Image
      style={{width:20,height:20}}
     source={require('../assets/RightArrow.png')}/>
     <View style={{marginLeft:10}} >
        <Text style={{color:"green",fontWeight:"bold"}
      }
       onPress={()=>navigation.navigate("Stream Details")}
      >Ongoing Stream</Text>
        <Text style={{color:"grey"}}>{time}</Text>
     </View>
     </View>
   

     
     <View style={{flexDirection:"row",flex:1.5}}>
     
     <Image
      style={{width:30,height:30}}
     source={require('../assets/GoodDollar.png')}/>
     <View style={{marginLeft:10}}>
     <Text style={{color:"black",fontWeight:"bold"}}>{streamRate}</Text>
       <Text style={{color:"grey"}}>G$/month</Text>
       
     </View>
      
     </View>
    </View>
    <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  }}
/>
    
    </View>
  )
}

export default StreamCard
