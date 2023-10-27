
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
  