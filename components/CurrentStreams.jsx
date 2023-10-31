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
  const [queryData,setQueryData]=useState([])
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
    setInterval(()=>{
      const getData=async ()=>{
        const query=await OngoingStreamData(address)
        //  console.log(query.streams)
        setQueryData(query.streams)
      }
      getData()
    },1000)
     
  },[])
  return (
    <Surface mode='flat'>
       <Text
       variant='titleMedium'
        style={{textAlign:"left",margin:10,marginTop:20}}
       >Ongoing Streams</Text>
       <Divider/>
<Surface mode = "flat">

    
{ queryData.length ?queryData.map(data => {
            return(
                <StreamCard
                key={data.createdAtTimestamp}
                time={data.createdAtTimestamp}
                address={data.receiver.id}
                streamRate={data.currentFlowRate}
                type={data.currentFlowRate?0:1}
              />

            )
        })
    :
    <Surface mode='flat' style={{justifyContent:"center",alignItems:"center",height:200}}>
        <Text variant="bodyLarge" style={{color:"grey"}}>No Ongoing Streams</Text>
      </Surface>
    }
</Surface>
      

    </Surface>
  );
};

export default CurrentStreams;
