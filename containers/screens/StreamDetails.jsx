import React, { useEffect, useState } from 'react'
import { Surface,Text } from 'react-native-paper'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { useAddress } from '@thirdweb-dev/react-native';
import { getQueryData } from '../../queries/flowcreation';
const StreamDetails = () => {
    const address=useAddress()
    const [data,setData]=useState()
  useEffect(()=>{
    const getData=async ()=>{
        console.log(await getQueryData())
    }
    getData()
  },[])
  return (
    <Surface>
   <Text></Text>
    </Surface>
  )
}

export default StreamDetails