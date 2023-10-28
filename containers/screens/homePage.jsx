
import React from 'react';
  import{ Button,Surface, Text} from 'react-native-paper';
  import { ScrollView } from 'react-native';

import HomeBanner from '../../components/homeBanner';
import OngoingStreams from '../../components/OngoingStreams';

const HomePage = ({route,navigation}) => {
    
  return (
    <Surface mode = "flat" style={{flex:1}}>

        {/* <Text
        style={{textAlign:"center",marginTop:10,fontSize:35,color:"black",fontWeight:"bold"}}
       >STREAM UP</Text>

        <CreateStream addRe = {route.params? `${route.params?.address}` : ""}/> */}
<Surface mode = "flat">
<HomeBanner />
</Surface>
<Surface mode = "flat"
style={{
  display:"flex",
  flexDirection:"row",
  marginTop:20,
  justifyContent:"center",
  gap:10
}}>
  <Button onPress={()=> navigation.navigate("Streams")} mode='contained'>Send</Button>
  <Button onPress={()=> navigation.navigate("Profile")} mode ="contained">Recieve</Button>

</Surface>
  <ScrollView style={{ margin:10}}>
<OngoingStreams/>
  </ScrollView>
  {/* <CancelStreamButton navigation={navigation} receiver={"0xD7D98e76FcD14689F05e7fc19BAC465eC0fF4161"}/> */}

    </Surface> 
  )
}

export default HomePage 