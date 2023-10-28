import React from 'react';
import { useTheme,Surface, Divider } from 'react-native-paper';
import {
  Text
} from "react-native-paper"

import { View } from 'react-native';
import StreamCard from './StreamCard'

const OngoingStreams = () => {
  const theme=useTheme()
  const ongoingData = [
    {
      transactionTime: '15:05',
      recipentAddress: '0x236d787093A17Ded4f8706109Da3011868A2Be51',
      streamRate: 0.001,
    },
    {
      transactionTime: '15:05',
      recipentAddress: '0x236d787093A17Ded4f8706109Da3011868A2Be51',
      streamRate: 0.001,
    }
   
  ];
  return (
    <Surface>
       <Text
       variant='titleMedium'
        style={{textAlign:"left",margin:10,}}
       >Activity History</Text>
       <Divider/>
<Surface mode = "flat">

      
        {ongoingData.map(data => {
            return(
                <StreamCard
                key={data.transactionTime}
                time={data.transactionTime}
                address={data.recipentAddress}
                streamRate={data.streamRate}
              />

            )
        })}
</Surface>
      

    </Surface>
  );
};

export default OngoingStreams;
