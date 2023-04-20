import { Platform } from 'react-native';

import { BASE_URL_ANDROID, BASE_URL_IOS } from '~src/contants/baseURL';

export const paymentService = async (total: number) => {
    const URL = Platform.OS === 'ios' ? BASE_URL_IOS : BASE_URL_ANDROID;
    const response = await fetch(`${URL}/payment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currency: 'usd', amount: total * 100, payment_method_types: ['Card'] }),
    });
    const paymentIntents = await response.json();

    const clientSecret = paymentIntents.client_secret;

    return clientSecret;
};
