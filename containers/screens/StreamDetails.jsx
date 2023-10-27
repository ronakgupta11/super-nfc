import React, { useEffect, useState } from 'react'
import { Surface } from 'react-native-paper'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { useAddress } from '@thirdweb-dev/react-native';
const StreamDetails = () => {
    const address=useAddress()
    const [data,setData]=useState()
  useEffect(()=>{
    const graphqlQuery = `
    query {
      flowUpdatedEvents(where: { sender: ${address} }) {
        timestamp
        token
        type
        totalSenderFlowRate
        totalAmountStreamedUntilTimestamp
        stream {
          streamedUntilUpdatedAt
        }
      }
    }
  `;
  const apiUrl = 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-celo-mainnet';
  console.log("querying")
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: graphqlQuery }),
  })
    .then((response) => response.json())
    .then((responseData) => {
      
      setData(responseData.data);
      console.log(data)
    })
    .catch((error) => {
      setError(error);
    });
  
  },[])
  return (
    <Surface>

    </Surface>
  )
}

export default StreamDetails