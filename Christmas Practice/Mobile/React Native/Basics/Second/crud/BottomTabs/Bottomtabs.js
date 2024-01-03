import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeTab from '../screens/HomeTab';

const Tab = createBottomTabNavigator();
const homeName = 'HomeTab'
const settingsName = 'Settings'


const Bottomtabs = () => {
    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconname
                    let rn = route.name

                    if (rn === homeName) {
                        iconname = focused ? 'home' : 'home-outline'
                    } else if (rn === settingsName) {
                        iconname = focused ? 'settings' : 'settings-outline'
                    }
                    return <Ionicons name={iconname} size={size} color={color} />
                },
            })}

        >
            <Tab.Screen name={homeName} component={HomeTab} />
            <Tab.Screen name={settingsName} component={Settings} />
        </Tab.Navigator>
    )
}

export default Bottomtabs

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    }
})