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
                <Image source={{ uri: "https://raw.githubusercontent.com/syednomishah/Login-SignUp-UI-React-Native/main/assets/images/welcome.png" }} style={{ width: 400, height: 400 }} />
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
      width: 350,
      height: 43,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
  }
})