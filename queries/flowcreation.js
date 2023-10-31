import OngoingStreams from "../components/OngoingStreams";

   export const getQueryData=async (address)=>{
    
    const graphqlQuery = `
    query {
      flowUpdatedEvents(where: { sender:"${address}"}) {
        timestamp
        token
        type
        totalSenderFlowRate
        totalAmountStreamedUntilTimestamp
        stream {
          streamedUntilUpdatedAt
          createdAtBlockNumber
        }
    receiver
    
      }
    }
  `;
  const apiUrl = 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-celo-mainnet';
  // console.log("querying")
   const result = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: graphqlQuery }),
  })
  
   const res= await result.json()
  
   return res?.data
  
  }

 export const OngoingStreamData = async (address)=>{
  const graphqlQuery= `query MyQuery {
    streams(
      where: {sender: "${address}", currentFlowRate_gt: "0"}
    ) {
      currentFlowRate
      token {
        symbol
      }
      sender {
        id
      }
      receiver {
        id
      }
      createdAtTimestamp
    }
  }`
  const apiurl="https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-celo-mainnet"

  const result = await fetch(apiurl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: graphqlQuery }),
  })
  // console.log("initial result",await result.json())
   const res= await result.json()
  //  console.log("this is result",res)
   return res?.data
  
  }


  