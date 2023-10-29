import OngoingStreams from "../components/OngoingStreams";

   export const getQueryData=async (address,setQueryData)=>{
    
    const graphqlQuery = `
    query {
      flowUpdatedEvents(where: { sender:"0x18029ED948bed2FEBb0689EcefdFF51259D7e7F0"}) {
        timestamp
        token
        type
        totalSenderFlowRate
        totalAmountStreamedUntilTimestamp
        stream {
          streamedUntilUpdatedAt
          createdAtBlockNumber
        }
      }
    }
  `;
  const apiUrl = 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-celo-mainnet';
  console.log("querying")
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

 export const OngoingStreamData = async ()=>{
  const graphqlQuery= `query MyQuery {
    streams(
      where: {sender: "0x18029ed948bed2febb0689ecefdff51259d7e7f0", currentFlowRate_gt: "0"}
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
  
   const res= await result.json()

   return res?.data
  
  }


  