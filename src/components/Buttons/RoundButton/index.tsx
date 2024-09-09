import React, { FC } from 'react';
import { ButtonContainer, ButtonText } from '~components/Buttons/RoundButton/style';
import { IButton } from '~components/Buttons/type';

export const RoundButton: FC<IButton> = ({ title, onPress }) => {
    return (
        <ButtonContainer onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    );
};
