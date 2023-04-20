import AsyncStorage from '@react-native-async-storage/async-storage';
import { CardField, confirmPayment, initStripe } from '@stripe/stripe-react-native';
import React, { FC, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components';

import { initAvatar } from '~components/AvatarBlock/config';
import { CustomModal } from '~components/CustomModal';
import { Payment } from '~components/Modals/Payment';
import { Wait } from '~components/Modals/Wait';
import { ButtonSquare } from '~components/shared/Button/ButtonSquare';
import { ProfileScreenProps } from '~navigation/HomeStack/type';
import {
    AvatarBlock,
    AvatarImage,
    ButtonContainer,
    CardContainer,
    ChapterText,
    CheckBoxContainer,
    MethodPaymentContainer,
    NameText,
    RootContainer,
    styles,
    TextAvatarBlock,
    TitleAndChangeThemeBlock,
    TitleText,
} from '~screens/ProfileScreen/style';
import { publishKey } from '~src/contants/stripeKey';
import { getCurrentTheme, getCurrentUser, getModalType } from '~src/redux/selectors';
import { setModalType } from '~src/redux/slices/modalSlice';
import { logOut, setTheme } from '~src/redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '~src/redux/store';
import { paymentService } from '~utils/paymentService';

const paymentMethods = [
    { id: 1, title: 'Credit Card', icon: 'credit-card' },
    { id: 2, title: 'Pay pal', icon: 'paypal' },
    { id: 3, title: 'Google Pay', icon: 'google' },
];

export const ProfileScreen: FC<ProfileScreenProps> = ({ route }) => {
    // @ts-ignore
    const { total } = route.params ? route.params : 0;

    const [method, setMethod] = useState('');

    const currentUser = useAppSelector(getCurrentUser);
    const modalType = useAppSelector(getModalType);

    const billingDetails = {
        email: currentUser!.email,
    };

    const dispatch = useAppDispatch();

    const payPress = async () => {
        await initStripe({
            publishableKey: publishKey,
        });
        try {
            dispatch(setModalType({ type: 'wait' }));

            const clientSecret: string = await paymentService(total);

            const { error, paymentIntent } = await confirmPayment(clientSecret, {
                paymentMethodType: 'Card',
                paymentMethodData: {
                    billingDetails,
                },
            });

            if (error) {
                console.log(`error`, error.message);
            } else if (paymentIntent) {
                dispatch(setModalType({ type: 'payment' }));
            }
        } catch (e: any) {
            console.log('e', e.message);
        }
    };

    const logoutPress = () => {
        dispatch(logOut());
    };

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

    const onPaymentMethodPress = (methodValue: string) => () => {
        if (method === methodValue) {
            setMethod('');
            return;
        }
        setMethod(methodValue);
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
                <AvatarImage source={{ uri: currentUser!.avatar ? currentUser!.avatar : initAvatar }} />
                <TextAvatarBlock>
                    <NameText>{currentUser!.name}</NameText>
                    <NameText>{currentUser!.email}</NameText>
                    <Icon name="sign-out" onPress={logoutPress} size={24} color={theme.TITLE_COLOR} />
                </TextAvatarBlock>
            </AvatarBlock>

            <ChapterText>My Card</ChapterText>
            <CardContainer>
                <CardField
                    onCardChange={(cardDetails) => console.log(cardDetails)}
                    postalCodeEnabled={false}
                    cardStyle={styles.card}
                    placeholders={{
                        number: '4242 4242 4242 4242',
                    }}
                    style={styles.wrapper}
                />
            </CardContainer>
            <ChapterText>Payments method</ChapterText>
            <CardContainer>
                {paymentMethods.map((payMethod) => (
                    <MethodPaymentContainer key={payMethod.id}>
                        <Icon name={payMethod.icon} size={18} color={theme.TITLE_COLOR} />
                        <NameText>{payMethod.title}</NameText>
                        <CheckBoxContainer
                            onPress={onPaymentMethodPress(payMethod.title)}
                            style={{
                                backgroundColor: method === payMethod.title ? theme.BLACK : theme.WHITE,
                            }}
                        />
                    </MethodPaymentContainer>
                ))}
            </CardContainer>
            <ButtonContainer>{total && <ButtonSquare title="pay" onPress={payPress} />}</ButtonContainer>

            {modalType === 'payment' && (
                <CustomModal>
                    <Payment />
                </CustomModal>
            )}
            {modalType === 'wait' && (
                <CustomModal>
                    <Wait />
                </CustomModal>
            )}
        </RootContainer>
    );
};
