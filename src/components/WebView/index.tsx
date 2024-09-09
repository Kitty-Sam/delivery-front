import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, BackHandler, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

import { useAppDispatch } from '~src/redux/configureStore';
import { setIsActiveUser, setIsFirstUserAction } from '~src/redux/slices/userSlice';

export interface IWvu {
    wvuStr: string;
    isPolicy?: boolean;
}

export const Wvu: FC<IWvu> = ({ wvuStr, isPolicy }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isIndicatorVisible, setIsIndicatorVisible] = useState(true);

    const wvuRef = useRef(null);

    const dispatch = useAppDispatch();

    const handleBackPress = useCallback(() => {
        if (wvuRef?.current) {
            // @ts-ignore
            wvuRef?.current.goBack();
            return true;
        }
        return false;
    }, []);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
        };
    }, [handleBackPress]);

    const handleHttpError = (statusCode: number) => {
        if (isPolicy) {
            setIsLoading(false);
        } else if (statusCode === 404) {
            dispatch(setIsActiveUser(false));
            dispatch(setIsFirstUserAction(false));
            setIsLoading(false);
        } else {
            dispatch(setIsActiveUser(true));
            dispatch(setIsFirstUserAction(false));
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator style={{ width: '100%', height: '100%' }} />
            </View>
        );
    }

    return (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        <SafeAreaView style={styles.container}>
            <WebView
                ref={wvuRef}
                source={{ uri: wvuStr }}
                onMessage={() => {}}
                javaScriptEnabled
                domStorageEnabled
                allowFileAccess
                allowFileAccessFromFileURLs
                allowUniversalAccessFromFileURLs
                thirdPartyCookiesEnabled
                cacheEnabled
                cacheMode="LOAD_DEFAULT"
                androidLayerType="none"
                allowsInlineMediaPlayback
                textZoom={100}
                onShouldStartLoadWithRequest={() => true}
                onLoadEnd={() => {
                    setIsIndicatorVisible(false);
                }}
                onHttpError={(syntheticEvent) => {
                    handleHttpError(syntheticEvent.nativeEvent.statusCode);
                }}
            />
            {isIndicatorVisible && <ActivityIndicator style={{ width: '100%', height: '100%' }} />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
});
