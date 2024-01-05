import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import CreateTab from '../../screens/CreateTab';
import ReadTab from '../../screens/ReadTab';
import UpdateTab from '../../screens/UpdateTab';
import DeleteTab from '../../screens/DeleteTab';

const Tab = createBottomTabNavigator();

const TAB_HOME = 'HomeTab'
const TAB_CREATE = 'CreateTab'
const TAB_READ = 'ReadTab'
const TAB_UPDATE = 'UpdateTab'
const TAB_DELETE = 'DeleteTab'

const TabsRoutes = () => {
    return (
        <Tab.Navigator
            initialRouteName={TAB_HOME}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconname
                    let rn = route.name

                    if (rn === TAB_HOME) {
                        iconname = focused ? 'home' : 'home-outline'
                    } else if (rn === TAB_CREATE) {
                        iconname = focused ? 'create' : 'create-outline'
                    } else if (rn === TAB_READ) {
                        iconname = focused ? 'mail-unread' : 'mail-unread-outline'
                    } else if (rn === TAB_UPDATE) {
                        iconname = focused ? 'refresh-circle' : 'refresh-circle-outline'
                    } else if (rn === TAB_DELETE) {
                        iconname = focused ? 'trash-bin' : 'trash-bin-outline'
                    }
                    return <Ionicons name={iconname} size={size} color={color} />
                },
            })}

        >
            <Tab.Screen name={TAB_HOME} component={Home} />
            <Tab.Screen name={TAB_CREATE} component={CreateTab} />
            <Tab.Screen name={TAB_READ} component={ReadTab} />
            <Tab.Screen name={TAB_UPDATE} component={UpdateTab} />
            <Tab.Screen name={TAB_DELETE} component={DeleteTab} />
        </Tab.Navigator>
    )
}

export default TabsRoutes