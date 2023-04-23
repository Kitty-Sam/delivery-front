import { useIsFocused } from '@react-navigation/native';
import React, { FC } from 'react';

import { CustomModal } from '~components/CustomModal';
import { LogoBlock } from '~components/LogoBlock';
import { Error } from '~components/Modals/Error';
import { ButtonSquare } from '~components/shared/Button/ButtonSquare';
import { FormInput } from '~components/shared/Input/FormInput';
import { useInput } from '~hooks/useInput';
import { AuthStackNavigationName, RegisterScreenProps } from '~navigation/AuthStack/type';
import { Container, InputsContainer } from '~screens/LoginScreen/style';
import { useRegisterUserMutation } from '~src/redux/api/authApi';
import { getModalType } from '~src/redux/selectors';
import { setModalType } from '~src/redux/slices/modalSlice';
import { useAppDispatch, useAppSelector } from '~src/redux/store';

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

    const dispatch = useAppDispatch();
    const modalType = useAppSelector(getModalType);

    const registerPress = async () => {
        try {
            await register({ email: email.value, password: password.value, name: userName.value }).unwrap();
            email.clear();
            password.clear();
            userName.clear();
            navigation.navigate(AuthStackNavigationName.LOGIN);
        } catch (e: any) {
            dispatch(setModalType({ type: 'error' }));
            console.log('error register', e.message());
        }
    };

    return (
        <Container>
            <LogoBlock screen={isFocused ? 'Register' : 'Login'} />
            <InputsContainer>
                {inputs.map(({ value, onChange, id, label }) => (
                    <FormInput value={value} onChangeText={onChange} key={id} label={label} />
                ))}
            </InputsContainer>

            <ButtonSquare
                title="Register"
                onPress={registerPress}
                disabled={
                    !email.value ||
                    !password.value ||
                    !userName.value ||
                    !confirmPassword.value ||
                    password.value !== confirmPassword.value
                }
            />

            {modalType === 'error' && (
                <CustomModal>
                    <Error />
                </CustomModal>
            )}
        </Container>
    );
};
