
import React from 'react';
  import{ Button, Text} from 'react-native-paper';
  import { View } from 'react-native';
 import CreateStream  from '../../components/CreateStream';
import BalanceComp from '../../components/BalanceComp';
import HomeBanner from '../../components/homeBanner';
const HomePage = ({route,navigation}) => {
    
  return (
    <View>

        {/* <Text
        style={{textAlign:"center",marginTop:10,fontSize:35,color:"black",fontWeight:"bold"}}
       >STREAM UP</Text>

        <CreateStream addRe = {route.params? `${route.params?.address}` : ""}/> */}
<HomeBanner/>
<View style={{
  flexDirection:"row"

}}>
  <Button mode='contained'>Send</Button>
  <Button mode ="contained">Recieve</Button>
</View>
<BalanceComp/>

    </View>
  )
}

export default HomePage 