import { Text,Surface, Divider,Icon} from 'react-native-paper'
import {Image} from "react-native"
import React from 'react'
import CancelStreamButton from './cancelStreamButton'
import { useNavigation } from '@react-navigation/native'
import { useTheme,MD3Colors } from 'react-native-paper'
// import {Icon } from '@rneui/themed';
const StreamCard = ({address,time,streamRate,type}) => {
  const StreamType=["Stream Created","","Stream Cancelled"]
  const navigation = useNavigation()
  const theme=useTheme()
  const StreamRateConverted=Math.round(((streamRate*((365/12) * 24 * 60 * 60*-1))/1e18 + Number.EPSILON) * 100) / 100
  const currentDate = new Date(time*1000).toDateString()
  return (
    <Surface mode="flat" style={{justifyContent:"center"}}>
       
        <Surface mode="flat" style={{flexDirection:"row",width:"100%",marginBottom:15,marginTop:15}}>
     
     <Surface mode="flat" style={{flexDirection:"row",alignItems:"center",flex:1.5}}>
     <Icon
     
     source={"arrow-right-circle"}
     size={16}/>
     <Surface mode="flat" style={{marginLeft:10}} >
        <Text variant='bodyLarge' style={{color:`${type==0?"green":theme.colors.error}`}} onPress={()=>navigation.navigate("Stream Details",{timeStamp:time,recipentAddress:address,type:type,streamRate:StreamRateConverted})} >{StreamType[type]}</Text>
        <Text variant='bodySmall'>{currentDate}</Text>
     </Surface >
     </Surface >
    <Surface mode="flat" style={{flex:0.7,marginRight:10}}>
    </Surface >

     
     <Surface mode="flat" style={{flexDirection:"row",flex:1.5}}>
     
     <Image
      style={{width:30,height:30}}
     source={require('../assets/GoodDollar.png')}/>
     <Surface mode="flat" style={{marginLeft:10}}>
     <Text  variant = "bodyLarge"style={{}}>{StreamRateConverted}</Text>
       <Text variant='bodySmall' style={{}}>G$/month</Text>
     </Surface >
     </Surface>
    </Surface >
    <Divider/>
    </Surface >
  )
}

export default StreamCard
