import React, { FC } from 'react';
import { ButtonContainer, ButtonText } from '~components/Buttons/SquareButton/style';
import { IButton } from '~components/Buttons/type';

export const SquareButton: FC<IButton> = ({ title, onPress }) => {
    return (
        <ButtonContainer onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    );
};
