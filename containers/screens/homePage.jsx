
import React from 'react';
  import{ Button, Text} from 'react-native-paper';
  import { View } from 'react-native';
 import CreateStream  from '../../components/CreateStream';
import BalanceComp from '../../components/BalanceComp';
import HomeBanner from '../../components/homeBanner';
import BottomSheetE from '../../components/BottomSheet';
import StreamButton from '../../components/StreamButton';
import CancelStreamButton from '../../components/cancelStreamButton';
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
<BottomSheetE/>
<StreamButton navigation={navigation} receiver={"0xD7D98e76FcD14689F05e7fc19BAC465eC0fF4161"} flowRate={380517503805}/>
<CancelStreamButton navigation={navigation} receiver={"0xD7D98e76FcD14689F05e7fc19BAC465eC0fF4161"} />
    </View>
  )
}

export default HomePage 