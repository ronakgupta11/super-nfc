
import { Button } from 'react-native-paper'
import React,{ useState} from 'react'
import { Framework } from '@superfluid-finance/sdk-core'
import { ethers } from 'ethers'
import { useAddress ,ConnectWallet, useSDK} from "@thirdweb-dev/react-native";



const StreamButton = ({navigation,receiver,flowRate}) => {
const sender = useAddress()
const [loading,setLoading] = useState(false)
const sdk = useSDK()


      const handleSendStream = async()=>{
        try{
            setLoading(true)
            // const providerJ = new ethers.providers.JsonRpcProvider("https://forno.celo.org")
            const signer = sdk?.getSigner();
            const eip1193Provider = signer?.provider;
            console.log("provider",eip1193Provider)
        // const signer = provider
        const sf = await Framework.create({
          chainId: 42220, //your chainId here
          provider:eip1193Provider,
        });
        const G$ = await sf.loadSuperToken("0x62b8b11039fcfe5ab0c56e502b1c372a3d2a9c7a");
        
            let flowOp = G$?.createFlow({
                sender: sender,
                receiver: receiver,
                flowRate: flowRate,
              });

            console.log(sender,receiver,flowRate,flowOp)
            console.log("signer",signer)
          
            await flowOp.exec(signer)
            
            setLoading(false)
            

        }catch(e){
            console.log(e)
            //emit error toast
            setLoading(false)

        }
        finally{
            navigation.navigate("Home")
        }

      }
if(sender){

    return <Button mode='contained' onPress={()=>handleSendStream()}>{loading?"Loading...":"Confirm Stream"}</Button>
}
else{
    return <ConnectWallet />
}

 
}

export default StreamButton