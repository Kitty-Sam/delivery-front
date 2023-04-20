import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, TextTitle } from '~components/Modals/style';
import { removeModalType } from '~src/redux/slices/modalSlice';
import { useAppDispatch } from '~src/redux/store';

export const Payment = () => {
    const dispatch = useAppDispatch();

    return (
        <Container>
            <TextTitle>Thanks for your payment</TextTitle>
            <Icon name="close" onPress={() => dispatch(removeModalType())} size={24} />
        </Container>
    );
};
