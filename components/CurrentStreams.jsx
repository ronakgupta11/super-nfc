import React, {useState,useEffect}from 'react';
import { useTheme,Surface, Divider } from 'react-native-paper';
import {
  Text
} from "react-native-paper"
import { useAddress } from '@thirdweb-dev/react-native';
import { View } from 'react-native';
import StreamCard from './StreamCard'
import { getQueryData } from '../queries/flowcreation';
import { OngoingStreamData } from '../queries/flowcreation';
const CurrentStreams = () => {
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
      const query=await OngoingStreamData()
       console.log(query.data)
      setQueryData(query.streams)
      
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
                key={data.createdAtTimestamp}
                time={data.createdAtTimestamp}
                address={data.receiver.id}
                streamRate={data.currentFlowRate}
                type={data.currentFlowRate?0:1}
              />

            )
        })}
</Surface>
      

    </Surface>
  );
};

export default CurrentStreams;
