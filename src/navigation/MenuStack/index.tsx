import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { MenuStackNavigationName, MenuStackParamList } from '~navigation/MenuStack/type';
import { DetailsScreen } from '~screens/DetailsScreen';
import { HomeScreen } from '~screens/HomeScreen';
import { OrderScreen } from '~screens/OrderScreen';

const Stack = createNativeStackNavigator<MenuStackParamList>();

export const MenuStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name={MenuStackNavigationName.HOME} component={HomeScreen} />
        <Stack.Screen name={MenuStackNavigationName.ORDER} component={OrderScreen} />
        <Stack.Screen name={MenuStackNavigationName.DETAIL} component={DetailsScreen} />
    </Stack.Navigator>
);
