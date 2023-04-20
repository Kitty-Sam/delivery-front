import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { StripeProvider } from '@stripe/stripe-react-native';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { AuthStack } from '~navigation/AuthStack';
import { RootStack } from '~navigation/RootStack';
import { publishKey } from '~src/contants/stripeKey';
import { darkTheme, lightTheme } from '~src/contants/theme';
import { getCurrentTheme, getIsLoggedIn } from '~src/redux/selectors';
import { setTheme } from '~src/redux/slices/userSlice';
import { store, useAppDispatch, useAppSelector } from '~src/redux/store';

export const App = () => {
    const isLoggedIn = useAppSelector(getIsLoggedIn);
    const theme = useAppSelector(getCurrentTheme);
    const dispatch = useAppDispatch();

    const getTheme = async () => {
        try {
            const themeValue = await AsyncStorage.getItem('@theme');
            if (themeValue) dispatch(setTheme(themeValue));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTheme();
    }, []);

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <StripeProvider publishableKey={publishKey}>
                <NavigationContainer>{isLoggedIn ? <RootStack /> : <AuthStack />}</NavigationContainer>
            </StripeProvider>
        </ThemeProvider>
    );
};

export const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
