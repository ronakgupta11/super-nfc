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
  const onLoginPress = () => {};

  const onFbLoginPress = async () => {
    Alert.alert(
      `Please use our React Native Starer Kit instead. You can download it for free at https://instamobile.io`
    );
    // try {
    //   await Facebook.initializeAsync({
    //     appId,
    //   });
    //   const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    //     permissions: ["public_profile", "email"],
    //   });
    //   if (type === "success") {
    //     const response = await fetch(
    //       `https://graph.facebook.com/me?access_token=${token}`
    //     );
    //     Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
    //   }
    // } catch ({ message }) {
    //   Alert.alert(`Facebook Login Error: ${message}`);
    // }
  };

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
            <ConnectWithWallet/>
          
        </View>
        
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
