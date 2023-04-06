import { useIsFocused } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';

import { LogoBlock } from '~components/LogoBlock';
import { ButtonSquare } from '~components/shared/Button';
import { FormInput } from '~components/shared/Input/FormInput';
import { useInput } from '~hooks/useInput';
import { AuthStackNavigationName, RegisterScreenProps } from '~navigation/AuthStack/type';
import { Container } from '~screens/LoginScreen/style';
import { useRegisterUserMutation } from '~src/redux/api/authApi';

export const RegisterScreen: FC<RegisterScreenProps> = ({ navigation }) => {
    const email = useInput('');
    const password = useInput('');
    const confirmPassword = useInput('');
    const userName = useInput('');

    const isFocused = useIsFocused();

    const inputs = [
        {
            id: '1',
            value: userName.value,
            onChange: userName.setValue,
            label: 'Username',
        },
        {
            id: '2',
            value: email.value,
            onChange: email.setValue,
            label: 'Email Address',
        },
        {
            id: '3',
            value: password.value,
            onChange: password.setValue,
            label: 'Password',
        },

        {
            id: '4',
            value: confirmPassword.value,
            onChange: confirmPassword.setValue,
            label: 'Confirm password ',
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
        <Container>
            <LogoBlock screen={isFocused ? 'Register' : 'Login'} />
            <View style={{ width: '80%' }}>
                {inputs.map(({ value, onChange, id, label }) => (
                    <FormInput value={value} onChangeText={onChange} key={id} label={label} />
                ))}
            </View>

            <ButtonSquare
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
        </Container>
    );
};
