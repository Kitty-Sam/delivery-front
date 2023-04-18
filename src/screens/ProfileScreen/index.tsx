import { CardField, confirmPayment } from '@stripe/stripe-react-native';
import React, { useState } from 'react';
import { Alert, Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { initAvatar } from '~components/AvatarBlock/config';
import { ButtonSquare } from '~components/shared/Button/ButtonSquare';
import { CardContainer, ChapterText, NameText, RootContainer, TitleText } from '~screens/ProfileScreen/style';
import { BASE_URL_IOS } from '~src/contants/baseURL';
import { getCurrentUser } from '~src/redux/selectors';
import { useAppSelector } from '~src/redux/store';

export const ProfileScreen = () => {
    const currentUser = useAppSelector(getCurrentUser);
    const [method, setMethod] = useState('');

    const amount = 50;
    const name = 'Egor';
    const PUBLIC_KEY =
        'pk_test_51LYUtmFO7YbklW5JGiQCAJrUodfACYBcJvVej3LwzUPXLY2GgrDDHD7XIa2gPtFNaVKE8Bif6EQeDwXVdPaeKakT007KJ5nXYd';
    const SECRET_KEY =
        'sk_test_51LYUtmFO7YbklW5JODuwshD7leP1MQQY4ZtbiD9geanU9MY60WjwolO9EEnL0pdEpzfWkcg9QP0OQa1j1qDlmqI200hmfrZHg6';

    const payPress = async () => {
        console.log('pay press', amount);

        try {
            const response = await fetch(`${BASE_URL_IOS}/create-payment-intent`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ currency: 'usd', amount }),
            });
            const paymentIntents = await response.json();

            console.log('paymentIntents', paymentIntents.client_secret);

            const clientSecret = paymentIntents.client_secret;

            const { error, paymentIntent } = await confirmPayment(clientSecret, {
                paymentMethodType: 'Card',
                paymentMethodData: { billingDetails: { name } },
            });

            console.log('paymentIntent', paymentIntent);

            if (error) {
                console.log('error', error.message);
            } else if (paymentIntent) {
                Alert.alert(`Thanks for your payment`);
            }
        } catch (ERROR: any) {
            console.log('error ERROR', ERROR.message);
        }
    };

    return (
        <RootContainer>
            <TitleText>My Profile</TitleText>
            <View style={{ flexDirection: 'row', padding: 30 }}>
                <Image
                    source={{ uri: currentUser!.avatar ? currentUser!.avatar : initAvatar }}
                    style={{ width: 80, height: 80, borderRadius: 40 }}
                />
                <View style={{ paddingLeft: 10, justifyContent: 'center' }}>
                    <NameText>{currentUser!.name}</NameText>
                    <NameText>{currentUser!.email}</NameText>
                </View>
            </View>

            <ChapterText>My Card</ChapterText>
            <CardContainer>
                <CardField
                    onCardChange={(cardDetails) => console.log(cardDetails)}
                    postalCodeEnabled={false}
                    cardStyle={{
                        borderColor: 'red',
                        borderWidth: 1,
                        borderRadius: 8,
                    }}
                    style={{ width: '100%', height: 50 }}
                />
            </CardContainer>
            <ChapterText>Payments method</ChapterText>
            <CardContainer>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 10,
                        backgroundColor: method === 'credit card' ? 'black' : 'white',
                    }}
                >
                    <Icon name="credit-card" size={18} />
                    <NameText>Credit Card</NameText>
                    <TouchableOpacity
                        onPress={() => setMethod('credit')}
                        style={{
                            width: 20,
                            height: 20,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: method === 'credit' ? 'black' : 'white',
                        }}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Icon name="paypal" size={18} />
                    <NameText>Paypal</NameText>
                    <TouchableOpacity
                        onPress={() => setMethod('paypal')}
                        style={{
                            width: 20,
                            height: 20,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: method === 'paypal' ? 'black' : 'white',
                        }}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Icon name="google" size={18} />
                    <NameText>Google pay</NameText>
                    <TouchableOpacity
                        onPress={() => setMethod('google')}
                        style={{
                            width: 20,
                            height: 20,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: method === 'google' ? 'black' : 'white',
                        }}
                    />
                </View>
            </CardContainer>
            <View style={{ paddingTop: 50, alignItems: 'center' }}>
                <ButtonSquare title="pay" onPress={payPress} />
            </View>
        </RootContainer>
    );
};
