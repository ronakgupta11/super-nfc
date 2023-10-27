import React, { useState,useEffect} from 'react';
import { useTheme } from 'react-native-paper';
import {
  Text,Card
} from "react-native-paper"
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import StreamCard from '../../components/StreamCard';
import { getQueryData } from '../../queries/flowcreation';
import { useAddress } from '@thirdweb-dev/react-native';

const OngoingStreams = () => {
  const navigation = useNavigation()
  const theme=useTheme()
  const address =useAddress()
  const [queryData,setQueryData]=useState()
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
  useEffect(()=>{
    const getData=async ()=>{
      const query=await getQueryData(address)
      return query
    }
    setQueryData(getData())
  },[])
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
