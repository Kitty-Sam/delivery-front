import { CardField, confirmPayment, initStripe } from '@stripe/stripe-react-native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components';

import { initAvatar } from '~components/AvatarBlock/config';
import { ButtonSquare } from '~components/shared/Button/ButtonSquare';
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
    TextAvatarBlock,
    TitleText,
} from '~screens/ProfileScreen/style';
import { BASE_URL_IOS } from '~src/contants/baseURL';
import { getCurrentUser } from '~src/redux/selectors';
import { logOut } from '~src/redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '~src/redux/store';

export const ProfileScreen = () => {
    const currentUser = useAppSelector(getCurrentUser);
    const [method, setMethod] = useState('');

    const theme: any = useTheme();

    const billingDetails = {
        email: 'jenny.rosen@example.com',
    };

    const payPress = async () => {
        await initStripe({
            publishableKey:
                'pk_test_51LYUtmFO7YbklW5JGiQCAJrUodfACYBcJvVej3LwzUPXLY2GgrDDHD7XIa2gPtFNaVKE8Bif6EQeDwXVdPaeKakT007KJ5nXYd',
        });
        try {
            const response = await fetch(`${BASE_URL_IOS}/payment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ currency: 'usd', amount: 50, payment_method_types: ['Card'] }),
            });
            const paymentIntents = await response.json();

            const clientSecret = paymentIntents.client_secret;

            const { error, paymentIntent } = await confirmPayment(clientSecret, {
                paymentMethodType: 'Card',
                paymentMethodData: {
                    billingDetails,
                },
            });

            if (error) {
                console.log(`error`, error.message);
            } else if (paymentIntent) {
                Alert.alert(`Thanks for your payment`);
            }
        } catch (ERROR: any) {
            console.log('ERROR', ERROR.message);
        }
    };

    const dispatch = useAppDispatch();

    const logoutPress = () => {
        dispatch(logOut());
    };

    return (
        <RootContainer>
            <TitleText>My Profile</TitleText>

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
                    cardStyle={{
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 8,
                    }}
                    placeholders={{
                        number: '4242 4242 4242 4242',
                    }}
                    style={{ width: '100%', height: 50 }}
                />
            </CardContainer>
            <ChapterText>Payments method</ChapterText>
            <CardContainer>
                <MethodPaymentContainer>
                    <Icon name="credit-card" size={18} color={theme.TITLE_COLOR} />
                    <NameText>Credit Card</NameText>
                    <CheckBoxContainer
                        onPress={() => setMethod('credit')}
                        style={{
                            backgroundColor: method === 'credit' ? 'black' : 'white',
                        }}
                    />
                </MethodPaymentContainer>
                <MethodPaymentContainer>
                    <Icon name="paypal" size={18} color={theme.TITLE_COLOR} />
                    <NameText>Paypal</NameText>
                    <CheckBoxContainer
                        onPress={() => setMethod('paypal')}
                        style={{
                            backgroundColor: method === 'paypal' ? 'black' : 'white',
                        }}
                    />
                </MethodPaymentContainer>
                <MethodPaymentContainer>
                    <Icon name="google" size={18} color={theme.TITLE_COLOR} />
                    <NameText>Google pay</NameText>
                    <CheckBoxContainer
                        onPress={() => setMethod('google')}
                        style={{
                            backgroundColor: method === 'google' ? 'black' : 'white',
                        }}
                    />
                </MethodPaymentContainer>
            </CardContainer>
            <ButtonContainer>
                <ButtonSquare title="pay" onPress={payPress} />
            </ButtonContainer>
        </RootContainer>
    );
};
