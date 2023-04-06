import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';

import { AuthStack } from '~navigation/AuthStack';
import { RootStack } from '~navigation/RootStack';
import { userSelector } from '~src/redux/slices/userSlice';
import { store, useAppSelector } from '~src/redux/store';

export const App = () => {
    const { isLoggedIn } = useAppSelector(userSelector);

    return <NavigationContainer>{isLoggedIn ? <RootStack /> : <AuthStack />}</NavigationContainer>;
};

export const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
