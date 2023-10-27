
import React from 'react';
  import{ Button, Text} from 'react-native-paper';
  import { View,ScrollView } from 'react-native';
 import CreateStream  from '../../components/CreateStream';
import BalanceComp from '../../components/BalanceComp';
import HomeBanner from '../../components/homeBanner';
import OngoingStreams from './OngoingStreams';
import BottomSheetE from '../../components/BottomSheet';
import CancelStreamButton from '../../components/cancelStreamButton';
const HomePage = ({route,navigation}) => {
    
  return (
    <View style={{display:"flex",flexDirection:"column"}}>

        {/* <Text
        style={{textAlign:"center",marginTop:10,fontSize:35,color:"black",fontWeight:"bold"}}
       >STREAM UP</Text>

        <CreateStream addRe = {route.params? `${route.params?.address}` : ""}/> */}
<View style={{}}>
<HomeBanner />
</View>
<View 
style={{
  display:"flex",
  flexDirection:"row",
  marginTop:20,
  justifyContent:"center",
  gap:10
}}>
  <Button  mode='contained'>Send</Button>
  <Button mode ="contained">Recieve</Button>

</View>
  <ScrollView style={{marginTop:15}}>
<OngoingStreams/>
  </ScrollView>
  <CancelStreamButton navigation={navigation} receiver={"0xD7D98e76FcD14689F05e7fc19BAC465eC0fF4161"}/>

    </View>
  )
}

export default HomePage 