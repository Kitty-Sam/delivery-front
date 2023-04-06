import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { AuthStackNavigationName, AuthStackParamList } from '~navigation/AuthStack/type';
import { LoginScreen } from '~screens/LoginScreen';
import { RegisterScreen } from '~screens/RegisterScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name={AuthStackNavigationName.LOGIN} component={LoginScreen} />
        <Stack.Screen name={AuthStackNavigationName.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
);
