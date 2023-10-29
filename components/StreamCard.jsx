import {Text, Surface, Divider, Icon} from 'react-native-paper';
import {Image} from 'react-native';
import React from 'react';
import CancelStreamButton from './cancelStreamButton';
import {useNavigation} from '@react-navigation/native';
import {useTheme, MD3Colors} from 'react-native-paper';
// import {Icon } from '@rneui/themed';
const StreamCard = ({address, time, streamRate, type,blockNo}) => {
  const StreamType = ['Send Stream', '', 'Stream Cancelled '];
  const navigation = useNavigation();
  const theme = useTheme();
  const StreamRateConverted =
    Math.abs(
      Math.round(
        ((streamRate * ((365 / 12) * 24 * 60 * 60 )) / 1e18 +
          Number.EPSILON) *
          100,
      ) / 100
    )
  const currentDate = new Date(time * 1000).toDateString();
  return (
    <Surface mode="flat" >
       
        <Surface mode="flat" style={{flexDirection:"row",width:"100%",marginBottom:15,marginTop:15, alignItems:"center",justifyContent:"space-between",padding:8}}>
     
     <Surface mode="flat" style={{flexDirection:"row",alignItems:"center"}}>
     <Icon
     
     source={type==0?"arrow-right-circle":"close-circle"}
     color={type==0?"green":"red"}
     size={20}/>
     <Surface mode="flat" style={{marginLeft:10}} >
        <Text variant='bodyLarge' style={{color:`${type==0?"green":theme.colors.error}`}} onPress={()=>navigation.navigate("StreamDetails",{timeStamp:time,recipentAddress:address,type:type,streamRate:StreamRateConverted,blockNumber:blockNo})} >{StreamType[type]}</Text>
        <Text variant='bodySmall'>{currentDate}</Text>
     </Surface >
     </Surface >
   

     
     <Surface mode="flat" style={{flexDirection:"row"}}>
     
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

export default StreamCard;
