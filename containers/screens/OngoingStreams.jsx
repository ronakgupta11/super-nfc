import React from 'react';
import { useTheme } from 'react-native-paper';
import {
  Text,Card
} from "react-native-paper"

import { View } from 'react-native';
import StreamCard from '../../components/StreamCard';

const OngoingStreams = () => {
  const theme=useTheme()
  const ongoingData = [
    {
      transactionTime: '15:05',
      recipentAddress: '0x236d787093A17Ded4f8706109Da3011868A2Be51',
      streamRate: 0.001,
    },
    {
        transactionTime: '15:06',
        recipentAddress: '0x236d787093A17Ded4f8706109Da3011868A2Be51',
        streamRate: 0.001,
      }
  ];
  return (
    <View>
       <Text
        style={{textAlign:"left",margin:10,fontSize:17,color:theme.colors.onPrimary}}
       >Activity History</Text>
       <View
/>
      <Card style={{width:"95%",marginLeft:10,paddingLeft:10,
      backgroundColor:theme.colors.onBackground
    }}>
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
      </Card>

    </View>
      // <Example/>

  );
};

export default OngoingStreams;
