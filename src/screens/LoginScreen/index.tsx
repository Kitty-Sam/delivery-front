import { useIsFocused } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';

import { LogoBlock } from '~components/LogoBlock';
import { ButtonSquare } from '~components/shared/Button';
import { FormInput } from '~components/shared/Input/FormInput';
import { useInput } from '~hooks/useInput';
import { LoginScreenProps } from '~navigation/AuthStack/type';
import { Container } from '~screens/LoginScreen/style';
import { useLoginUserMutation } from '~src/redux/api/authApi';

export const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
    const email = useInput('');
    const password = useInput('');
    const isFocused = useIsFocused();

    const inputs = [
        {
            id: '1',
            value: email.value,
            onChange: email.setValue,
            label: 'Email Address',
        },
        {
            id: '2',
            value: password.value,
            onChange: password.setValue,
            label: 'Password',
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

    return (
        <Container>
            <LogoBlock screen={isFocused ? 'Login' : 'Register'} />
            <View style={{ width: '80%' }}>
                {inputs.map(({ value, onChange, id, label }) => (
                    <FormInput value={value} onChangeText={onChange} key={id} label={label} />
                ))}
            </View>

            <ButtonSquare title="Login" onPress={loginPress} disabled={!email.value || !password.value} />
        </Container>
    );
};
