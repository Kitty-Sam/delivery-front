import React, { FC } from 'react';

import { ButtonContainer, ButtonText } from '~components/shared/Button/ButtonCorner/style';

export interface IButton {
    title: string;
    onPress: () => void;
}

export const ButtonCorner: FC<IButton> = ({ onPress, title }) => (
    <ButtonContainer onPress={onPress}>
        <ButtonText>{title}</ButtonText>
    </ButtonContainer>
);
