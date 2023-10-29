import React, { useEffect, useState } from 'react'
import { Surface,Text } from 'react-native-paper'
import { useAddress } from '@thirdweb-dev/react-native';
import { useNavigation,useRoute} from '@react-navigation/native';
import CancelStreamButton from './cancelStreamButton';

const StreamDetailCard = () => {
    const route=useRoute()
    const { timeStamp,recipentAddress,blockNumber,type,streamRate,totalStreamed} = route.params;
    const address=useAddress()
    
    

  return (
    <Surface
     mode='flat'
    >
    
        
        <Surface mode = "flat" style={{height:"100%",justifyContent:'space-evenly'}}>
            <Text variant='headlineMedium'  style={{textAlign:"center", color:`${type==0?"green":"red"}`}}>{type==0?"Send Stream":"Stream Cancelled"}</Text>
        <Surface mode = "flat">
        <Text variant='titleLarge'>{type==0?"Flow Rate:":"Total Amount Streamed:"}</Text>
        <Text variant='bodyLarge' style={{textAlign:"center"}}>{type==0?streamRate:totalStreamed} wei</Text>

        </Surface>
        <Surface mode = "flat">
            <Text variant='titleLarge'>Sender : </Text>
            <Text variant='bodyLarge'>{address}</Text>
        </Surface>
        <Surface mode = "flat">
            <Text variant='titleLarge'>Reciever :</Text>
            <Text variant='bodyLarge'>{recipentAddress}</Text>
        </Surface >
        <Surface mode = "flat" style={{flexDirection:"row"}} >
            <Text variant='titleLarge' style={{alignSelf:"flex-start"}}>
                Start Date:
            </Text>
            <Text variant='bodyLarge' style={{alignSelf:"flex-end"}}>
                { timeStamp}
            </Text>
        </Surface>
        {
             <Surface mode = "flat" style={{flexDirection:"row"}} >
             <Text variant='titleLarge' style={{alignSelf:"flex-start"}}>
                 End Date: 
             </Text>
             <Text variant='bodyLarge' style={{alignSelf:"flex-end"}}>
                 infinity
             </Text>
         </Surface>
        }
      {!blockNumber&&<CancelStreamButton receiver={recipentAddress}  />}
       
        </Surface>
    

    </Surface>
  )
}

export default StreamDetailCard