import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

import { AuthStack } from '~navigation/AuthStack';
import { RootStack } from '~navigation/RootStack';

export const App = () => {
    const [isLogged, setIsLogged] = useState(true);
    return <NavigationContainer>{isLogged ? <RootStack /> : <AuthStack />}</NavigationContainer>;
};
