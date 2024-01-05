import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const CreateTab = () => {
  return (
    <View style={styles.SafeView}>
      <ImageBackground source={{ uri: "http://source.unsplash.com/woman-in-black-blazer-covering-her-face-with-gray-scarf-HlVjI5WmoQY" }} style={{ width: "100%", height: "100%" }}/>
    </View>
  )
}

export default CreateTab

const styles = StyleSheet.create({
  SafeView: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})