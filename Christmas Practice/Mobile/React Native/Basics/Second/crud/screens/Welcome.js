import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

const Welcome = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Let's Get Started!
                </Text>
            </View>
            <View>
                <Image source={{ uri: "https://gradeschool.smu.edu.ph/wp-content/uploads/2021/03/final-logo2.png" }} style={{ width: 200, height: 200 }} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.TouchableOpac}>
                <Text style={styles.Text}>Start</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#4071db",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 40
    },
    title: {
        fontSize: 35,
        color: "white",
        fontWeight: "bold",
        textShadowColor: '#000', // Text shadow color
        textShadowOffset: {
            width: 0,
            height: 5,
        },
        textShadowRadius: 4
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
        backgroundColor: "#0cf520",
        width: 250,
        height: 43,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})