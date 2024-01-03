import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

const Settings = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Settings
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#333",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 30
    },
    title: {
        fontSize: 40,
        color: "white",
        fontWeight: "bold"
    }
})