import React, { useEffect, useState } from 'react'
import { Divider, Surface,Text } from 'react-native-paper'
import { useAddress } from '@thirdweb-dev/react-native';
import { useNavigation,useRoute} from '@react-navigation/native';
import CancelStreamButton from './cancelStreamButton';

const StreamDetailCard = () => {
    const route=useRoute()
    const { timeStamp,recipentAddress,blockNumber,type,streamRate,totalStreamed,totalStreamedTime} = route.params;
    const address=useAddress()
    const StreamRateConverted = Math.abs(
        Math.round(
          ((streamRate * ((365 / 12) * 24 * 60 * 60)) / 1e18 + Number.EPSILON) *
            100,
        ) / 100,
      );

      const startDate = new Date(timeStamp * 1000).toDateString();
      const endDate = new Date(totalStreamedTime).toDateString();
  return (
    <Surface
     mode='flat'
     style={{padding:20}}
    >
        <Surface mode = "flat" style={{height:"100%",justifyContent:'space-evenly'}}>
            <Surface mode='flat'>
            <Text variant='headlineMedium'  style={{textAlign:"center", color:`${type==0?"green":"red"}`}}>{type==0?"Send Stream":"Stream Cancelled"}</Text>
            <Divider/>
            </Surface>
        <Surface mode = "flat">

        <Surface mode='flat' style={{}}>
        <Text variant='titleLarge'>{type==0?"Flow Rate:":"Total Amount Streamed"}</Text>
        <Text variant='bodyLarge' style={{}}>{type==0?streamRate:totalStreamed} wei</Text>
        </Surface>

        </Surface>
        <Surface mode = "flat">
            <Text variant='titleLarge'>Sender : </Text>
            <Text variant='bodyLarge'>{address}</Text>
        </Surface>
        <Surface mode = "flat">
            <Text variant='titleLarge'>Reciever :</Text>
            <Text variant='bodyLarge'>{recipentAddress}</Text>
        </Surface >
        <Surface mode = "flat" style={{}} >
            <Text variant='titleLarge' style={{alignSelf:"flex-start"}}>
                Start Date:
            </Text>
            <Text variant='bodyLarge' style={{}}>
                { startDate}
            </Text>
        </Surface>
    
      {!blockNumber&&<CancelStreamButton receiver={recipentAddress}  />}
       
        </Surface>
    

    </Surface>
  )
}

export default StreamDetailCard