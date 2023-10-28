import { TouchableOpacity, Text, Linking, View, Image, ImageBackground, BackHandler } from 'react-native';
import React,{useState} from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';

const QrScannerScreen = () => {
    const [scan,setScan] = useState(true)
    const [scanResult,setScanResult] = useState(false)
    const [result,setResult] = useState(null)

    const onSuccess = (e)=>{
        const check = e.data.substring(0, 8);
        console.log('scanned data' + e.data);
        setResult(e)
        setScan(false)
        setScanResult(true)
        if (check === 'supernfc') {
            Linking.openURL(e.data).catch(err => console.error('An error occured', err));
        } else {
            setResult(e)
            setScan(false)
            setScanResult(true)
        }

    }
    const activeQR = () => {
        setScan(true)
    }
    const scanAgain = () => {
        setScan(true)
        setScanResult(false)
    }
  return (
    <View>
         {/* {!scan && !scanResult &&
                        <View style={styles.cardView} >
                            <Image source={require('./assets/camera.png')} style={{height: 36, width: 36}}></Image>
                            <Text numberOfLines={8} style={styles.descText}>Please move your camera {"\n"} over the QR Code</Text>
                            <Image source={require('./assets/qr-code.png')} style={{margin: 20}}></Image>
                            <TouchableOpacity onPress={activeQR} style={styles.buttonScan}>
                                <View style={styles.buttonWrapper}>
                                <Image source={require('./assets/camera.png')} style={{height: 36, width: 36}}></Image>
                                <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>Scan QR Code</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    } */}
                    {/* {scanResult &&
                        <View>

                            <Text style={styles.textTitle1}>Result</Text>
                            <View style={scanResult ? styles.scanCardView : styles.cardView}>
                                <Text>Type : {result.type}</Text>
                                <Text>Result : {result.data}</Text>
                                <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                                <TouchableOpacity onPress={scanAgain} style={styles.buttonScan}>
                                    <View style={styles.buttonWrapper}>
                                        <Image source={require('./assets/camera.png')} style={{height: 36, width: 36}}></Image>
                                        <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>Click to scan again</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        
                    } */}
       {scan &&
                        <QRCodeScanner
                            // reactivate={true}
                            showMarker={true}
                            // ref={(node) => { scanner = node }}
                            onRead={onSuccess}
                            topContent={
                                <Text >
                                   Please move your camera {"\n"} over the QR Code
                                </Text>
                            }
                            bottomContent={
                                <View>
                                    {/* <ImageBackground source={require('./assets/bottom-panel.png')} style={styles.bottomContent}>
                                        <TouchableOpacity style={styles.buttonScan2} 
                                            onPress={() => scanner.reactivate()} 
                                           >
                                            <Image source={require('./assets/camera2.png')}></Image>
                                        </TouchableOpacity>
                                    </ImageBackground> */}
                                    <Text>Bottom</Text>
                                </View>
                            }
                        />
                    }
    </View>
  )
}

export default QrScannerScreen