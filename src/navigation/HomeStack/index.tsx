import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { HomeStackNavigationName, HomeStackParamList } from '~navigation/HomeStack/type';
import { FavoriteScreen } from '~screens/FavoriteScreen';
import { HomeScreen } from '~screens/HomeScreen';
import { NotificationScreen } from '~screens/NotificationScreen';
import { ProfileScreen } from '~screens/ProfileScreen';
import { darkTheme } from '~src/contants/theme';

export const Home = createBottomTabNavigator<HomeStackParamList>();

export const HomeStack = () => (
    <Home.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName = 'home';

                if (route.name === HomeStackNavigationName.HOME) {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === HomeStackNavigationName.FAVORITE) {
                    iconName = focused ? 'book-sharp' : 'book-outline';
                } else if (route.name === HomeStackNavigationName.NOTIFICATION) {
                    iconName = focused ? 'notifications-sharp' : 'notifications-outline';
                } else if (route.name === HomeStackNavigationName.PROFILE) {
                    iconName = focused ? 'md-person-sharp' : 'md-person-outline';
                }
                return <Icon name={iconName} size={size} color={darkTheme.COLORED_BUTTON} />;
            },
            tabBarLabelStyle: {
                color: darkTheme.SECONDARY_COLOR,
            },

            headerShown: false,
        })}
    >
        <Home.Screen name={HomeStackNavigationName.HOME} component={HomeScreen} />
        <Home.Screen name={HomeStackNavigationName.FAVORITE} component={FavoriteScreen} />
        <Home.Screen name={HomeStackNavigationName.NOTIFICATION} component={NotificationScreen} />
        <Home.Screen name={HomeStackNavigationName.PROFILE} component={ProfileScreen} />
    </Home.Navigator>
);
