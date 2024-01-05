import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

const Welcome = () => {
    const navigation = useNavigation()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home'); // Replace with the screen you want to navigate to after splash
        }, 3000); // Adjust the duration (in milliseconds) as needed

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <View style={styles.container}>
                <View>
                    <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png" }} style={styles.logo} />
                </View>
            </View>
        </>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 100
    },
    title: {
        fontSize: 40,
        color: "white",
        fontWeight: "bold"
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    Text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#222",
        letterSpacing: 1
    },
    TouchableOpac: {
        backgroundColor: "#222",
        width: 350,
        height: 43,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 120, // Adjust the width as needed
        height: 50
    }

})