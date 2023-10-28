
import React from 'react';
  import{ Button,Surface, Text} from 'react-native-paper';
  import { ScrollView } from 'react-native';

import HomeBanner from '../../components/homeBanner';


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
  <Button mode='contained'>Send</Button>
  <Button mode ="contained">Recieve</Button>

</Surface>
 
    </Surface> 
  )
}

export default HomePage 