import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@rneui/base';

const HomeScreen = () => {
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet scanned')

    const askForCameraPermission = () => {
        (
            async () => {
                const { status } = await BarCodeScanner.requestPermissionsAsync();
                setHasPermission(status === 'granted');
            }
        )
            ()
    }

    // Request Camera Permission
    useEffect(() => {
        askForCameraPermission();
    }, []);

    // What happens when we scan the bar code
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data)
        console.log('Type: ' + type + '\nData: ' + data)
    };

    // Check permissions and return the screens
    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>)
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={{ margin: 10 }}>No access to camera</Text>
                <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
            </View>)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#111" }}>
            <View style={styles.container}>
                <View style={styles.barcodebox}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={{ height: 400, width: 400 }} />
                </View>
                <Text style={styles.maintext}>{text}</Text>

                {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    maintext: {
        fontSize: 16,
        margin: 20,
        color: "white"
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato'
    }
})