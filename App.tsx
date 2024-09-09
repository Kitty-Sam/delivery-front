import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components/native';

import { Wvu } from '~components/WebView';
import { RootStack } from '~navigation/RootStack';
import { darkTheme, lightTheme } from '~src/contants/theme';
import { persistor, store, useAppDispatch, useAppSelector } from '~src/redux/configureStore';
import { getCurrentTheme, getIsActiveUser, getIsFirstUserAction } from '~src/redux/selectors';
import { setTheme } from '~src/redux/slices/userSlice';

export const App = () => {
    const theme = useAppSelector(getCurrentTheme);
    const dispatch = useAppDispatch();

    const isActiveUser = useAppSelector(getIsActiveUser);
    const isFirstUserAction = useAppSelector(getIsFirstUserAction);

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

    // if (isFirstUserAction) {
    //     return <Wvu wvuStr="https://www.big-bass-fish.store" />;
    // }

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            {/* {isActiveUser ? ( */}
            {/*    <Wvu wvuStr="https://www.big-bass-fish.store" /> */}
            {/* ) : ( */}
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
            {/* )} */}
        </ThemeProvider>
    );
};

export const ReduxApp = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);
