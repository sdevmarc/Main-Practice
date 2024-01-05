import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, StyleSheet, ImageBackground, Image, StatusBar  } from 'react-native'

const Home = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.SafeView}>

        <ImageBackground source={{ uri: "http://source.unsplash.com/woman-in-yellow-tracksuit-standing-on-basketball-court-side-nimElTcTNyY" }} style={{ width: "100%", height: "100%" }}>
          <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png" }} style={styles.logo} />
        </ImageBackground>
      </View>
    </>

  )
}

export default Home

const styles = StyleSheet.create({
  SafeView: {
    flex: 1
  },
  logo: {
    width: 350, // Adjust the width as needed
    height: 150,
    alignSelf: 'center',
    marginTop: 50

  }

})