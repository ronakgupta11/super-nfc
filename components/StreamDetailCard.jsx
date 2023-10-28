import React, { useEffect, useState } from 'react'
import { Surface,Text } from 'react-native-paper'
import { useAddress } from '@thirdweb-dev/react-native';
import { getQueryData } from '../queries/flowcreation';
import { useNavigation,useRoute} from '@react-navigation/native';
import { View,Image } from 'react-native';
import CancelStreamButton from './cancelStreamButton';
const StreamDetailCard = () => {
    const route=useRoute()
    const { timeStamp,recipentAddress} = route.params;
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
          if(finalQdata[j].timestamp==timeStamp)
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
        <View style={{height:"100%",justifyContent:'space-evenly'}}>
            <Text style={{textAlign:"center",fontSize:30}}>{data.type==0?"Stream Rate":"Total Amount Streamed"}</Text>
        <View>
        <Text style={{textAlign:"center"}}>{data.type==0?data.totalSenderFlowRate:data.totalAmountStreamedUntilTimestamp}</Text>
    <View style={{ flexDirection: 'row',justifyContent:"center"}}>
              <Image
                source={require('../assets/GoodDollar.png')}
                style={{width: 25, height: 25}}
              />
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 20,
                }}>
                GoodDollar
                <Text style={{color: 'grey', fontSize: 15}}> G$</Text>
              </Text>
            </View>
        </View>
        <View>
            <Text>Sender : </Text>
            <Text>{address}</Text>
        </View>
        <View>
            <Text>Reciever :</Text>
            <Text>{data.token}</Text>
        </View>
        <View style={{flexDirection:"row"}} >
            <Text style={{alignSelf:"flex-start"}}>
                Start Date :
            </Text>
            <Text style={{alignSelf:"flex-end"}}>
                {data.timestamp}
            </Text>
        </View>
        {
             <View style={{flexDirection:"row"}} >
             <Text style={{alignSelf:"flex-start"}}>
                 End Date :
             </Text>
             <Text style={{alignSelf:"flex-end"}}>
                 {data.totalAmountStreamedUntilTimestamp}
             </Text>
         </View>
        }
    
       
        </View>
    }

    </Surface>
  )
}

export default StreamDetailCard