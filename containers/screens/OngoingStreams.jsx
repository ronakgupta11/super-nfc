import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {Card, Input, Box} from '@rneui/themed';
import StreamCard from '../../components/StreamCard';
const OngoingStreams = () => {
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
        style={{textAlign:"center",margin:10,fontSize:30}}
       >Activity History</Text>
       <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  }}
/>
      <Card>
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
  );
};

export default OngoingStreams;
