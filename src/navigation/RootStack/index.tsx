import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type';
import { HomeScreen } from '~screens/HomeScreen';
import { NotificationScreen } from '~screens/NotificationScreen';
import { OrderScreen } from '~screens/OrderScreen';
import { ProfileScreen } from '~screens/ProfileScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();
export const RootStack = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName = 'home';

                if (route.name === RootStackNavigationName.HOME) {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === RootStackNavigationName.ORDER) {
                    iconName = focused ? 'book-sharp' : 'book-outline';
                } else if (route.name === RootStackNavigationName.NOTIFICATION) {
                    iconName = focused ? 'notifications-sharp' : 'notifications-outline';
                } else if (route.name === RootStackNavigationName.PROFILE) {
                    iconName = focused ? 'md-person-sharp' : 'md-person-outline';
                }
                return <Icon name={iconName} size={size} color={color} />;
            },

            headerShown: false,
        })}
    >
        <Tab.Screen name={RootStackNavigationName.HOME} component={HomeScreen} />
        <Tab.Screen name={RootStackNavigationName.ORDER} component={OrderScreen} />
        <Tab.Screen name={RootStackNavigationName.NOTIFICATION} component={NotificationScreen} />
        <Tab.Screen name={RootStackNavigationName.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
);
