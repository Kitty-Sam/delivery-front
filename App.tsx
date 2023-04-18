import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { StripeProvider } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { AuthStack } from '~navigation/AuthStack';
import { RootStack } from '~navigation/RootStack';
import { darkTheme, lightTheme } from '~src/contants/theme';
import { getIsLoggedIn } from '~src/redux/selectors';
import { store, useAppSelector } from '~src/redux/store';

export const App = () => {
    const isLoggedIn = useAppSelector(getIsLoggedIn);

    return <NavigationContainer>{isLoggedIn ? <RootStack /> : <AuthStack />}</NavigationContainer>;
};

export const ReduxApp = () => {
    const [theme, setTheme] = useState('light');

    const getTheme = async () => {
        try {
            const themeValue = await AsyncStorage.getItem('@theme');
            if (themeValue) setTheme(themeValue);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTheme();
    }, []);

    const toggleTheme = async () => {
        const themeValue = theme === 'dark' ? 'light' : 'dark';
        try {
            await AsyncStorage.setItem('@theme', themeValue);
            setTheme(themeValue);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <StripeProvider
            publishableKey="pk_test_51LYUtmFO7YbklW5JGiQCAJrUodfACYBcJvVej3LwzUPXLY2GgrDDHD7XIa2gPtFNaVKE8Bif6EQeDwXVdPaeKakT007KJ5nXYd
"
        >
            <Provider store={store}>
                <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
                    <App />
                </ThemeProvider>
            </Provider>
        </StripeProvider>
    );
};
