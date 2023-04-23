import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, TextTitle } from '~components/Modals/style';
import { removeModalType } from '~src/redux/slices/modalSlice';
import { useAppDispatch } from '~src/redux/store';

export const Error = () => {
    const dispatch = useAppDispatch();
    const onClosePress = () => dispatch(removeModalType());

    return (
        <Container>
            <TextTitle>Something goes wrong, check your credentials</TextTitle>
            <Icon name="close" onPress={onClosePress} size={24} />
        </Container>
    );
};
