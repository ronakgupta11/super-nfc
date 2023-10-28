import { Text,Surface, Divider,Icon} from 'react-native-paper'
import {Image} from "react-native"
import React from 'react'

const StreamCard = ({address,time,streamRate}) => {
      
  return (
    <Surface mode="flat" style={{justifyContent:"center"}}>
       
        <Surface mode="flat" style={{flexDirection:"row",width:"100%",marginBottom:15,marginTop:15}}>
     
     <Surface mode="flat" style={{flexDirection:"row",alignItems:"center",flex:1.5}}>
     <Icon
     
     source={"arrow-right-circle"}
     size={16}/>
     <Surface mode="flat" style={{marginLeft:10}} >
        <Text variant='bodyLarge' style={{color:"green"}}>Ongoing Stream</Text>
        <Text variant='bodySmall'>{time}</Text>
     </Surface >
     </Surface >
    <Surface mode="flat" style={{flex:0.7,marginRight:10}}>
    </Surface >

     
     <Surface mode="flat" style={{flexDirection:"row",flex:1.5}}>
     
     <Image
      style={{width:30,height:30}}
     source={require('../assets/GoodDollar.png')}/>
     <Surface mode="flat" style={{marginLeft:10}}>
     <Text  variant = "bodyLarge"style={{}}>{streamRate}</Text>
       <Text variant='bodySmall' style={{}}>G$/month</Text>
       
     </Surface >
      
     </Surface>
    </Surface >
    <Divider/>
    
    
    </Surface >
  )
}

export default StreamCard
