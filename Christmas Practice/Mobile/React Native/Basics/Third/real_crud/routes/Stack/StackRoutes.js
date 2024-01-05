import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsRoutes from '../Tabs/TabsRoutes';
import Welcome from '../../screens/Welcome';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function StackRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={TabsRoutes} options={{ headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackRoutes