import React from "react";
import styles from "./style";
import superLogo from '../../../assets/superLogo.jpg'
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image
} from "react-native";
import ConnectWithWallet from "../ConnectWithWallet";
import { Button, SocialIcon } from "react-native-elements";
const appId = "1047121222092614";

export default function LoginScreen() {
  

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerView}>
          
            <Image 
             style={{width:200,marginTop:110}}
            source={require('../../../assets/superLogo.jpg')}/>
            <Text style={styles.logoText}>StreamUp</Text>
            <Text
             style={{color:"black",textAlign:"center",fontWeight:"600"}} 
            >Connect Your Wallet Here !</Text>
            <ConnectWithWallet  />
          
        </View>
        
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
