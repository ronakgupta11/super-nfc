import React, {useState,useEffect}from 'react';
import { useTheme,Surface, Divider } from 'react-native-paper';
import {
  Text
} from "react-native-paper"
import { useAddress } from '@thirdweb-dev/react-native';
import { View } from 'react-native';
import StreamCard from './StreamCard'
import { getQueryData } from '../queries/flowcreation';
const OngoingStreams = () => {
  const [queryData,setQueryData]=useState()
  useEffect(()=>{
    const getData=async ()=>{
      const query=await getQueryData()
       console.log(query.flowUpdatedEvents)
      setQueryData(query.flowUpdatedEvents)
    }
    getData()
    
  },[])
  return (
    <Surface>
       <Text
       variant='titleMedium'
        style={{textAlign:"left",margin:10,}}
       >Activity History</Text>
       <Divider/>
<Surface mode = "flat">

    
{queryData?.map(data => {
            return(
                <StreamCard
                key={data.timestamp}
                time={data.timestamp}
                address={data.token}
                streamRate={data.totalSenderFlowRate}
                type={data.type}
              />

            )
        })}
</Surface>
      

    </Surface>
  );
};

export default OngoingStreams;
