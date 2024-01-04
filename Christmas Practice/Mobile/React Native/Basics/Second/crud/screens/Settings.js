import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import axios from 'axios'
import { useState } from 'react'

const Settings = () => {
    const navigation = useNavigation()
    const [values, setValues] = useState({
        title: '',
        author: '',
    })


    const addData = () => {
        axios.post('http://192.168.1.11:3000/posts', values)
            .then(() => {
                Alert.alert("Yay!", "You have submitted successfully!")
                setValues({ title: '', author: '' });
            })
            .catch(e => Alert.alert('Error', `${e.message}`))
    }


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
                    <TextInput
                        placeholder='Enter the title'
                        style={styles.Input}
                        value={values.title}
                        onChangeText={text => setValues({ ...values, title: text })}
                    ></TextInput>
                </View>
                <View style={styles.TextField}>
                    <Text style={styles.textTitle}>Author</Text>
                    <TextInput
                        placeholder='Enter the Author'
                        style={styles.Input}
                        value={values.author}
                        onChangeText={text => setValues({ ...values, author: text })}
                    ></TextInput>
                </View>
                <Button title='Submit' onPress={addData} />
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