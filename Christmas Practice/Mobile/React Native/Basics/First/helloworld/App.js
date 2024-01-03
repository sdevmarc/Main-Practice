import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}
                    options={{
                        title: 'This is Home',
                        headerTitleAlign: 'center'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default App
