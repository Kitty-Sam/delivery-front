import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { MenuStack } from '~navigation/MenuStack';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type';
import { FavoriteScreen } from '~screens/FavoriteScreen';
import { NotificationScreen } from '~screens/NotificationScreen';
import { ProfileScreen } from '~screens/ProfileScreen';
import { darkTheme } from '~src/contants/theme';

const Tab = createBottomTabNavigator<RootStackParamList>();
export const RootStack = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName = 'home';

                if (route.name === RootStackNavigationName.HOME) {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === RootStackNavigationName.FAVORITE) {
                    iconName = focused ? 'book-sharp' : 'book-outline';
                } else if (route.name === RootStackNavigationName.NOTIFICATION) {
                    iconName = focused ? 'notifications-sharp' : 'notifications-outline';
                } else if (route.name === RootStackNavigationName.PROFILE) {
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
        <Tab.Screen name={RootStackNavigationName.HOME} component={MenuStack} />
        <Tab.Screen name={RootStackNavigationName.FAVORITE} component={FavoriteScreen} />
        <Tab.Screen name={RootStackNavigationName.NOTIFICATION} component={NotificationScreen} />
        <Tab.Screen name={RootStackNavigationName.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
);
