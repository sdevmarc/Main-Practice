import { View, Text, StyleSheet } from 'react-native'
import { Button } from '@rneui/base';

const Home = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }></Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "start",
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
})