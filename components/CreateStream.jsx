import React, {useState, useEffect, useRef} from 'react';
import {Text, Button, Card, TextInput, useTheme} from 'react-native-paper';
import {View, Image, ScrollView, KeyboardAvoidingView} from 'react-native';
// import {Text} from 'react-native-elements';
// import {Card, Input, Box} from '@rneui/themed';
import {Framework} from '@superfluid-finance/sdk-core';
import {ethers} from 'ethers';
import {useNavigation} from '@react-navigation/native';
import {white} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const CreateStream = ({addRe}) => {
  // const provider = useEthersProvider({chainId:42220})
  const [loading, setLoading] = useState(false);
  const sendStreamButtonRef = useRef();
  const scrollRef = useRef();
  const theme = useTheme();

  useEffect(() => {
    setLoading(true);

    async function init() {
      const providerJ = new ethers.providers.JsonRpcProvider(
        'https://forno.celo.org',
      );
      // console.log('providerJ', providerJ);

      const sf = await Framework.create({
        chainId: 42220, //your chainId here
        provider: providerJ,
      });
      // console.log("sf",sf)
      const G$ = await sf.loadSuperToken(
        '0x62b8b11039fcfe5ab0c56e502b1c372a3d2a9c7a',
      );
      // let res = await G$.getFlow({
      //   sender: address,
      //   receiver: reciever ,
      //   providerOrSigner: provider
      // });

      // console.log(res);
      // return res
      console.log('G', G$);
    }
    init()
      .then(v => {
        setLoading(false);
        // console.log("res",v)
      })
      .catch(e => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  const add = addRe;

  // console.log(add)
  const [address, setAddress] = useState(add);
  const [streamRate, setStreamRate] = useState();
  const navigation = useNavigation();
  const handleSendStream = () => {
    navigation.navigate('Confirm Stream');
  };
  return (
    <Card
      style={{
        borderRadius: 20,
        width: '95%',
        alignSelf: 'center',
        marginTop:20
      }}>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <Text
            style={{
              fontSize: 20,
              width: '50%',
              alignSelf: 'center',
              textAlign: 'center',
              padding: 10,
              borderRadius: 20,
            
              marginTop: 0,
              marginBottom: 20,
            }}>
            Create Stream
          </Text>
          <Text
            style={{
              backgroundColor: 'rgba(16, 187, 53, 0.08)',
              marginLeft: 10,
              width: '20%',
              textAlign: 'center',
              padding: 10,
              borderRadius: 20,
              color: 'rgb(16, 187, 53)',
            }}>
            Stream
          </Text>
          <TextInput
            
            value={address}
            onChangeText={setAddress}
            placeholder="Reciever Wallet Adress"
            style={{marginBottom: 0}}
          />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Super Token
          </Text>
          <Card>
            <View style={{display: 'flex', flexDirection: 'row',}}>
              <Image
                source={require('../assets/GoodDollar.png')}
                style={{width: 30, height: 30}}
              />
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 20,
                }}>
                GoodDollar
                <Text style={{color: 'grey', fontSize: 15}}> G$</Text>
              </Text>
            </View>
          </Card>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Flow Rate
          </Text>
          <TextInput
            value={streamRate}
            onChangeText={setStreamRate}
            placeholder="0.0"
            style={{}}
          />
          <Button
            title="Send Stream"
            onPress={handleSendStream}
            disabled={!streamRate}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </Card>
  );
};

export default CreateStream;
