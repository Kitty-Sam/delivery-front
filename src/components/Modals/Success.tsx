import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, TextTitle } from '~components/Modals/style';
import { useAppDispatch } from '~src/redux/configureStore';
import { removeModalType } from '~src/redux/slices/modalSlice';

export const Success = () => {
    const dispatch = useAppDispatch();
    const onClosePress = () => dispatch(removeModalType());

    return (
        <Container>
            <TextTitle>This food position is added into bucket</TextTitle>
            <Icon name="close" onPress={onClosePress} size={24} />
        </Container>
    );
};
