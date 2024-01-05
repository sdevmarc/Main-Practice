import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, StyleSheet } from 'react-native'

const DeleteTab = () => {
  return (
    <SafeAreaView style={styles.SafeView}>
    <View style={styles.container}>
        <Text>
            Delet
        </Text>
    </View>
</SafeAreaView>
  )
}

export default DeleteTab

const styles = StyleSheet.create({
    SafeView: {
        flex: 1,
        backgroundColor: "plum"
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  })