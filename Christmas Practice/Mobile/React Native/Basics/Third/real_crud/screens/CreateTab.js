import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, StyleSheet } from 'react-native'

const CreateTab = () => {
  return (
    <SafeAreaView style={styles.SafeView}>
    <View style={styles.container}>
        <Text>
            Create
        </Text>
    </View>
</SafeAreaView>
  )
}

export default CreateTab

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