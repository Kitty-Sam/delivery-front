import React, { FC } from 'react';
import { Button, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useInput } from '~hooks/useInput';
import { AuthStackNavigationName, RegisterScreenProps } from '~navigation/AuthStack/type';
import { useRegisterUserMutation } from '~src/redux/api/authApi';

export const RegisterScreen: FC<RegisterScreenProps> = ({ navigation }) => {
    const email = useInput('');
    const password = useInput('');
    const confirmPassword = useInput('');
    const userName = useInput('');

    const inputs = [
        {
            id: '1',
            value: userName.value,
            onChange: userName.setValue,
            placeholder: 'Enter your username',
        },
        {
            id: '2',
            value: email.value,
            onChange: email.setValue,
            placeholder: 'Enter your email',
        },
        {
            id: '3',
            value: password.value,
            onChange: password.setValue,
            placeholder: 'Enter your password',
        },

        {
            id: '4',
            value: confirmPassword.value,
            onChange: confirmPassword.setValue,
            placeholder: 'Enter your password again',
        },
    ];

    const [register] = useRegisterUserMutation();

    const registerPress = async () => {
        try {
            await register({ email: email.value, password: password.value, name: userName.value }).unwrap();
            email.clear();
            password.clear();
            userName.clear();
            navigation.navigate(AuthStackNavigationName.LOGIN);
        } catch (e: any) {
            console.log('error register', e.message());
        }
    };

    return (
        <SafeAreaView>
            <Text>Register</Text>
            {inputs.map(({ value, onChange, placeholder, id }) => (
                <TextInput placeholder={placeholder} value={value} onChangeText={onChange} key={id} />
            ))}
            <Button
                title="Register"
                onPress={registerPress}
                disabled={
                    !email.value ||
                    !password.value ||
                    !userName.value ||
                    !confirmPassword.value ||
                    userName.value !== confirmPassword.value
                }
            />
        </SafeAreaView>
    );
};
