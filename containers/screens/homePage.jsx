
import React from 'react';
  import{ Button,Surface} from 'react-native-paper';


import HomeBanner from '../../components/homeBanner';
import CurrentStreams from '../../components/CurrentStreams';


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
<CurrentStreams/>
 
    </Surface> 
  )
}

export default HomePage 