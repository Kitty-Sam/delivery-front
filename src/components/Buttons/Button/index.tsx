import React, { FC } from 'react';
import { ButtonContainer, ButtonText } from '~components/Buttons/Button/style';
import { IButton } from '~components/Buttons/type';

export const AppButton: FC<IButton> = ({ title, onPress }) => {
    return (
        <ButtonContainer onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    );
};
