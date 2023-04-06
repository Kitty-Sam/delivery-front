import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useGetAllFoodsQuery } from '~src/redux/api/foodApi';
import { logOut } from '~src/redux/slices/userSlice';
import { useAppDispatch } from '~src/redux/store';

export const HomeScreen = () => {
    const { data: allFoods } = useGetAllFoodsQuery();

    const dispatch = useAppDispatch();

    const logoutPress = () => {
        dispatch(logOut());
    };
    return (
        <SafeAreaView>
            <Button title="logout" onPress={logoutPress} />
            <Text>Home</Text>
        </SafeAreaView>
    );
};
