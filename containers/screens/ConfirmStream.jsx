import React from 'react'
import { Surface,Text,Divider,useTheme } from 'react-native-paper'
import StreamButton from '../../components/StreamButton'
import { Image } from 'react-native'

const ConfirmStream = ({navigation,route}) => {
  const theme = useTheme()
  return (
    <Surface  mode ="flat"
     style={{
      flex:1,
      padding:8,
      justifyContent:"space-evenly"

    }}>

        <Text variant='headlineMedium' style={{margin:4,textAlign:"center"}}> Confirm Stream in Wallet</Text>
        <Divider/>
        <Text variant='titleMedium'> Receiver Wallet Address:</Text>
        <Surface mode='flat' style={{
          padding:4,
          margin:4,
          // backgroundColor:theme.colors.secondaryContainer,
          borderRadius:10,
          borderColor:theme.colors.secondaryContainer,
          // borderWidth:"2px"

        }}>

        <Text variant='bodyLarge' > {route.params.addressReceiver}</Text>
        </Surface>
        <Text  variant='titleMedium'> Super Token:</Text>
        <Surface mode='flat' style={{ flexDirection: 'row'}}>
              <Image
                source={require('../../assets/GoodDollar.png')}
                style={{width: 30, height: 30}}
              />
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 20,
                }}>
                GoodDollar 
                <Text style={{color: 'grey', fontSize: 19}}>  G$</Text>
              </Text>
            </Surface>
        <Text  variant='titleMedium'> Flow Rate:</Text>

        <Surface mode='flat' style={{
          padding:4,
          margin:4
        }}>


        <Text variant='bodyLarge'> {route.params.flowRate} wei/second</Text>
        </Surface>
        <StreamButton navigation={navigation} receiver={route.params.addressReceiver} flowRate={route.params.flowRate}/>
    </Surface>
  )
}

export default ConfirmStream