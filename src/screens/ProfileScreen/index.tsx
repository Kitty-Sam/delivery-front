import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components';

import { initAvatar } from '~components/AvatarBlock/config';
import { Form } from '~components/Form';
import { ButtonSquare } from '~components/shared/Button/ButtonSquare';
import { HomeStackNavigationName, ProfileScreenProps } from '~navigation/HomeStack/type';
import {
    AvatarBlock,
    AvatarImage,
    ButtonContainer,
    RootContainer,
    TitleAndChangeThemeBlock,
    TitleText,
} from '~screens/ProfileScreen/style';
import { useCreateOrderMutation } from '~src/redux/api/foodApi';
import { useAppDispatch, useAppSelector } from '~src/redux/configureStore';
import { getBucketOrders, getCurrentTheme } from '~src/redux/selectors';
import { clearBucket } from '~src/redux/slices/bucketSlice';
import { setTheme } from '~src/redux/slices/userSlice';

export const ProfileScreen: FC<ProfileScreenProps> = ({ route, navigation }) => {
    // @ts-ignore
    const { total } = route.params ? route.params : 0;
    const orders = useAppSelector(getBucketOrders);

    const dispatch = useAppDispatch();

    const themeRedux = useAppSelector(getCurrentTheme);

    const toggleTheme = async () => {
        const themeValue = themeRedux === 'dark' ? 'light' : 'dark';
        try {
            await AsyncStorage.setItem('@theme', themeValue);
            dispatch(setTheme(themeValue));
        } catch (error) {
            console.log(error);
        }
    };

    const [createOrder] = useCreateOrderMutation();

    // onOrderPress(values.name, values.phone, values.address, values.comment, paymentMethod);

    const onOrderPress = async (
        name: string,
        address: string,
        phone: string,
        comment: string,
        paymentMethod: string,
    ) => {
        await createOrder({
            userId: 1,
            order: orders,
            userName: name,
            userPhone: phone,
            userAddress: address,
            comment,
            paymentMethod,
        }).unwrap();
        // @ts-ignore
        navigation.navigate(HomeStackNavigationName.PROFILE, { total: totalPrice });
        dispatch(clearBucket());
    };

    const theme: any = useTheme();

    return (
        <RootContainer>
            <TitleAndChangeThemeBlock>
                <TitleText>My Profile</TitleText>
                <Icon
                    name={themeRedux === 'dark' ? 'moon-o' : 'sun-o'}
                    onPress={toggleTheme}
                    size={24}
                    color={theme.TITLE_COLOR}
                />
            </TitleAndChangeThemeBlock>

            <AvatarBlock>
                <AvatarImage source={{ uri: initAvatar }} />
            </AvatarBlock>
            <Form onOrderPress={onOrderPress} />
        </RootContainer>
    );
};
