import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, StyleSheet } from 'react-native'

const UpdateTab = () => {
  return (
    <SafeAreaView style={styles.SafeView}>
    <View style={styles.container}>
        <Text>
            Update
        </Text>
    </View>
</SafeAreaView>
  )
}

export default UpdateTab

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