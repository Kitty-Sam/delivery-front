import React, { FC } from 'react';
import { Button, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useInput } from '~hooks/useInput';
import { AuthStackNavigationName, LoginScreenProps } from '~navigation/AuthStack/type';
import { useLoginUserMutation } from '~src/redux/api/authApi';

export const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
    const email = useInput('');
    const password = useInput('');

    const inputs = [
        {
            id: '1',
            value: email.value,
            onChange: email.setValue,
            placeholder: 'Enter your email',
        },
        {
            id: '2',
            value: password.value,
            onChange: password.setValue,
            placeholder: 'Enter your password',
        },
    ];

    const [login] = useLoginUserMutation();

    const loginPress = async () => {
        try {
            await login({ email: email.value, password: password.value }).unwrap();
            email.clear();
            password.clear();
        } catch (e: any) {
            console.log('error login', e.message());
        }
    };

    const registerNavigate = () => {
        navigation.navigate(AuthStackNavigationName.REGISTER);
    };

    return (
        <SafeAreaView>
            <Text>Login</Text>
            {inputs.map(({ value, onChange, placeholder, id }) => (
                <TextInput placeholder={placeholder} value={value} onChangeText={onChange} key={id} />
            ))}
            <Button title="Login" onPress={loginPress} disabled={!email.value || !password.value} />
            <TouchableOpacity onPress={registerNavigate}>
                <Text>Dont have account yet?</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
