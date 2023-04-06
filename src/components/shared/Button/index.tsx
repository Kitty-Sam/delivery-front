import React, { FC } from 'react';

import { ButtonContainer, ButtonText } from '~components/shared/Button/style';

export interface IButton {
    disabled: boolean;
    title: string;
    onPress: () => void;
}

export const ButtonSquare: FC<IButton> = ({ onPress, title, disabled }) => (
    <ButtonContainer onPress={onPress}>
        <ButtonText>{title}</ButtonText>
    </ButtonContainer>
);
