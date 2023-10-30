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
  const address=useAddress()
  const [queryData,setQueryData]=useState([])
  useEffect(()=>{
    const getData=async ()=>{
      //0x18029ed948bed2febb0689ecefdff51259d7e7f0
      const query=await getQueryData("0x18029ed948bed2febb0689ecefdff51259d7e7f0")
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
      

    </Surface>
  );
};

export default OngoingStreams;
