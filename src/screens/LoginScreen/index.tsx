import { useIsFocused } from '@react-navigation/native';
import React, { FC } from 'react';

import { CustomModal } from '~components/CustomModal';
import { LogoBlock } from '~components/LogoBlock';
import { Error } from '~components/Modals/Error';
import { ButtonSquare } from '~components/shared/Button/ButtonSquare';
import { FormInput } from '~components/shared/Input/FormInput';
import { useInput } from '~hooks/useInput';
import { LoginScreenProps } from '~navigation/AuthStack/type';
import { Container, InputsContainer } from '~screens/LoginScreen/style';
import { useLoginUserMutation } from '~src/redux/api/authApi';
import { getModalType } from '~src/redux/selectors';
import { setModalType } from '~src/redux/slices/modalSlice';
import { useAppDispatch, useAppSelector } from '~src/redux/store';

export const LoginScreen: FC<LoginScreenProps> = () => {
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

    const dispatch = useAppDispatch();

    const modalType = useAppSelector(getModalType);

    const loginPress = async () => {
        try {
            await login({ email: email.value, password: password.value }).unwrap();
            email.clear();
            password.clear();
        } catch (e: any) {
            dispatch(setModalType({ type: 'error' }));
            console.log('error login', e.message());
        }
    };

    return (
        <Container>
            <LogoBlock screen={isFocused ? 'Login' : 'Register'} />
            <InputsContainer>
                {inputs.map(({ value, onChange, id, label }) => (
                    <FormInput value={value} onChangeText={onChange} key={id} label={label} />
                ))}
            </InputsContainer>

            <ButtonSquare title="Login" onPress={loginPress} disabled={!email.value || !password.value} />

            {modalType === 'error' && (
                <CustomModal>
                    <Error />
                </CustomModal>
            )}
        </Container>
    );
};
