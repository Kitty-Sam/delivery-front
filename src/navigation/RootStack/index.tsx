import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { HomeStack } from '~navigation/HomeStack';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type';
import { DetailsScreen } from '~screens/DetailsScreen';
import { OrderScreen } from '~screens/OrderScreen';

const Root = createNativeStackNavigator<RootStackParamList>();
export const RootStack = () => (
    <Root.Navigator screenOptions={{ headerShown: false }}>
        <Root.Screen name={RootStackNavigationName.HOMESTACK} component={HomeStack} />
        <Root.Screen name={RootStackNavigationName.ORDER} component={OrderScreen} />
        <Root.Screen name={RootStackNavigationName.DETAILS} component={DetailsScreen} options={{ headerShown: true }} />
    </Root.Navigator>
);
