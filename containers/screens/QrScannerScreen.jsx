import {Linking } from 'react-native';
import React,{useState} from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Surface,Text } from 'react-native-paper';

const QrScannerScreen = () => {


    const onSuccess = (e)=>{
        const check = e.data.substring(0, 8);
        console.log('scanned data' + e.data);
        
        if (check === 'supernfc') {
            Linking.openURL(e.data).catch(err => console.error('An error occured', err));
        } 

    }

  return (
    <Surface mode = "flat" style={{flex:1,alignItems:"center",justifyContent:"space-around",padding:8}}>

<Text style={{margin:4}} variant="titleMedium" >
                                   Scan Qr Code to start Streaming
                                </Text>
                        <QRCodeScanner
                            
                            showMarker={true}
                            onRead={onSuccess}
                            
                          
                        />
                    
    </Surface>
  )
}

export default QrScannerScreen