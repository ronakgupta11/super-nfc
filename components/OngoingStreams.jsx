import React, {useState,useEffect}from 'react';
import { useTheme,Surface, Divider } from 'react-native-paper';
import {
  Text
} from "react-native-paper"
import { useAddress } from '@thirdweb-dev/react-native';
import { View } from 'react-native';
import StreamCard from './StreamCard'
import { getQueryData } from '../queries/flowcreation';
import { ScrollView } from 'react-native-gesture-handler';
const OngoingStreams = () => {
  const address=useAddress()
  const [queryData,setQueryData]=useState([])
  useEffect(()=>{
   setInterval(()=>
   {

    const getData=async ()=>{

      const query=await getQueryData(address)
      //  console.log(query.flowUpdatedEvents)
       const dataArray=query.flowUpdatedEvents.reverse()
      setQueryData(query.flowUpdatedEvents)
    }
    getData()
   },1000)
    
  },[])
  return (

<Surface mode = "flat">


{queryData.length? queryData.map(data => {
            return(
                <StreamCard
                key={data.timestamp}
                time={data.timestamp}
                address={data.receiver}
                streamRate={data.totalSenderFlowRate}
                type={data.type}
                blockNo={data.stream.createdAtBlockNumber?1:0}
                totalStreamedTime={data.totalAmountStreamedUntilTimestamp}
                totalStreamed={data.stream.streamedUntilUpdatedAt}
              />

            )
        }
        )
      : <Surface mode='flat' style={{justifyContent:"center",alignItems:"center",height:200}}>
        <Text style={{color:"grey"}}>No Activity</Text>
      </Surface>
      }


      

    </Surface>
  );
};

export default OngoingStreams;
