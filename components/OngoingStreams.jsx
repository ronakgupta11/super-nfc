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
  const theme=useTheme()
  const [queryData,setQueryData]=useState()
  const address =useAddress()
  // const ongoingData = [
  //   {
  //     transactionTime: '15:05',
  //     recipentAddress: '0x236d787093A17Ded4f8706109Da3011868A2Be51',
  //     streamRate: 0.001,
  //   },
  //   {
  //     transactionTime: '15:05',
  //     recipentAddress: '0x236d787093A17Ded4f8706109Da3011868A2Be51',
  //     streamRate: 0.001,
  //   }
   
  // ];
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
