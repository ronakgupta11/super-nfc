import React, { useEffect, useState } from 'react'
import { Surface,Text } from 'react-native-paper'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { useAddress } from '@thirdweb-dev/react-native';
import { getQueryData } from '../../queries/flowcreation';
const StreamDetailCard = () => {
    const { timeStamp } = route.params;
    const address=useAddress()
    const [data,setData]=useState()
  useEffect(()=>{
    const getData=async ()=>{
        const qdata=await getQueryData()
        let i=0
        while(i<qdata.length)
        {
            if(qdata[i].timeStamp==timeStamp)
            {
                console.log(qdata)
                setData(qdata)
            }

        }
    }
    getData()
  },[])
  return (
    <Surface>
   <Text></Text>
    </Surface>
  )
}

export default StreamDetailCard