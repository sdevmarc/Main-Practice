import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, StyleSheet } from 'react-native'

const Home = () => {
  return (
    <SafeAreaView style={styles.SafeView}>
        <View style={styles.container}>
            <Text>
                Home
            </Text>
        </View>
    </SafeAreaView>
  )
}

export default Home

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