import React, { useEffect, useState } from 'react'
import { Surface,Text } from 'react-native-paper'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { useAddress } from '@thirdweb-dev/react-native';

import StreamDetailCard from '../../components/StreamDetailCard';
const StreamDetails = () => {
    
    const address=useAddress()

  return (
    <Surface>
   <StreamDetailCard/>
    </Surface>
  )
}

export default StreamDetails