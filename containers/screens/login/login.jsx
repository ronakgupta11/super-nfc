import React from "react";
import styles from "./style";
import {
  
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
  Image
} from "react-native";
import ConnectWithWallet from "../ConnectWithWallet";
export default function LoginScreen() {
  

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerView}>
          
            <Image 
             style={{width:200,marginTop:110}}
            source={require('../../../assets/logo.png')}/>
            <Text style={styles.logoText}>Tap to Stream</Text>
            <Text
             style={{color:"black",textAlign:"center",fontWeight:"600"}} 
            >Connect Your Wallet Here !</Text>
            <ConnectWithWallet  />
          
        </View>
        
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
