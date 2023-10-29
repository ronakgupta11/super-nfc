import React, { useEffect, useState } from 'react'
import { Surface,Text } from 'react-native-paper'
import { useAddress } from '@thirdweb-dev/react-native';
import { getQueryData } from '../queries/flowcreation';
import { useNavigation,useRoute} from '@react-navigation/native';

const StreamDetailCard = () => {
    const route=useRoute()
    const { timeStamp,recipentAddress,blockNumber} = route.params;
    const address=useAddress()
    const [data,setData]=useState()
    const [isCancelled,setIsCancelled]=useState(false)
  useEffect(()=>{
    const getData=async ()=>{
        const qdata=await getQueryData()
        // console.log(qdata.flowUpdatedEvents)
        const finalQdata=qdata.flowUpdatedEvents
        // console.log(finalQdata[0])
        let i=0
        while(i<finalQdata.length)
        {
            if(finalQdata[i].timestamp==timeStamp)
            {
                // console.log(finalQdata[i])
                setData(finalQdata[i])
            }
        
            i++
        }
        let j=0,ctr=0   
        while(j<finalQdata.length)
        {
            if(finalQdata[j].stream.createdAtBlockNumber==blockNumber)
            {
                ctr++
            }
            console.log(finalQdata[j])
            j++
        }
      if(ctr>1)
      {
        setIsCancelled(true)
      }

    }
    getData()
  },[])
  return (
    <Surface
     mode='flat'
    >
    {
        data && 
        <Surface mode = "flat" style={{height:"100%",justifyContent:'space-evenly'}}>
            <Text variant='headlineMedium'  style={{textAlign:"center", color:`${data.type==0?"green":"red"}`}}>{data.type==0?"Send Stream":"Stream Cancelled"}</Text>
        <Surface mode = "flat">
        <Text variant='titleLarge'>{data.type==0?"Flow Rate:":"Total Amount Streamed:"}</Text>
        <Text variant='bodyLarge' style={{textAlign:"center"}}>{data.type==0?data.totalSenderFlowRate:data.totalAmountStreamedUntilTimestamp} wei</Text>

        </Surface>
        <Surface mode = "flat">
            <Text variant='titleLarge'>Sender : </Text>
            <Text variant='bodyLarge'>{address}</Text>
        </Surface>
        <Surface mode = "flat">
            <Text variant='titleLarge'>Reciever :</Text>
            <Text variant='bodyLarge'>{data.token}</Text>
        </Surface >
        <Surface mode = "flat" style={{flexDirection:"row"}} >
            <Text variant='titleLarge' style={{alignSelf:"flex-start"}}>
                Start Date:
            </Text>
            <Text variant='bodyLarge' style={{alignSelf:"flex-end"}}>
                { data.timestamp}
            </Text>
        </Surface>
        {
             <Surface mode = "flat" style={{flexDirection:"row"}} >
             <Text variant='titleLarge' style={{alignSelf:"flex-start"}}>
                 End Date: 
             </Text>
             <Text variant='bodyLarge' style={{alignSelf:"flex-end"}}>
                 { data.totalAmountStreamedUntilTimestamp}
             </Text>
         </Surface>
        }
      {!blockNumber&&<CancelStreamButton/>}
       
        </Surface>
    }

    </Surface>
  )
}

export default StreamDetailCard