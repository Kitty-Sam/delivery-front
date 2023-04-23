import React, { FC } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { Container, TextTitle, TitleContainer } from '~components/Modals/style';
import { IAddress } from '~components/Modals/type';
import { ButtonCorner } from '~components/shared/Button/ButtonCorner';
import { Input } from '~components/shared/Input/style';
import { removeModalType } from '~src/redux/slices/modalSlice';
import { useAppDispatch } from '~src/redux/store';

export const Address: FC<IAddress> = ({ address, setAddress }) => {
    const dispatch = useAppDispatch();
    const theme: any = useTheme();

    const onClosePress = () => dispatch(removeModalType());
    const onAddPress = () => {
        if (address.trim() === '') {
            Alert.alert('Enter your address');
            return;
        }
        Alert.alert('Your address successfully added');
        dispatch(removeModalType());
    };

    return (
        <Container>
            <TitleContainer>
                <TextTitle>Enter your address</TextTitle>
                <Icon name="close" onPress={onClosePress} size={24} color={theme['TEXT_COLOR']} />
            </TitleContainer>
            <Input value={address} onChangeText={setAddress} placeholder="Please, enter your address" />
            <ButtonCorner title="Add" onPress={onAddPress} />
        </Container>
    );
};
