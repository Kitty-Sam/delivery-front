import React, { FC } from 'react';

import { ButtonContainer, ButtonText } from '~components/shared/Button/ButtonSquare/style';

export interface IButton {
    title: string;
    onPress: () => void;
    disabled?: boolean;
}

export const ButtonSquare: FC<IButton> = ({ onPress, title, disabled }) => (
    <ButtonContainer onPress={onPress}>
        <ButtonText>{title}</ButtonText>
    </ButtonContainer>
);
