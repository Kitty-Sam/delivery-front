import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, TextTitle } from '~components/Modals/style';
import { removeModalType } from '~src/redux/slices/modalSlice';
import { useAppDispatch } from '~src/redux/store';

export const Match = () => {
    const dispatch = useAppDispatch();

    return (
        <Container>
            <TextTitle>Match is not found</TextTitle>
            <Icon name="close" onPress={() => dispatch(removeModalType())} size={24} />
        </Container>
    );
};
