import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
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
            <View style={styles.textForm}>
                <View style={styles.TextField}>
                    <Text style={styles.textTitle}>Title</Text>
                    <TextInput placeholder='Enter the title' style={styles.Input}></TextInput>
                </View>
                <View style={styles.TextField}>
                    <Text style={styles.textTitle}>Author</Text>
                    <TextInput placeholder='Enter the Author' style={styles.Input}></TextInput>
                </View>
                <Button title='Submit' />
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
    },
    textTitle: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
    },
    Input: {
        width: 200,
        height: 40,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10
    },
    TextField: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
    },
    textForm: {
        gap: 10
    }
})