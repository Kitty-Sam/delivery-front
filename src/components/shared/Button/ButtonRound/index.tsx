import React, { FC } from 'react';

import { ButtonContainer, ButtonText } from '~components/shared/Button/ButtonRound/style';

export interface IButton {
    title: string;
    onPress: () => void;
}

export const ButtonRound: FC<IButton> = ({ onPress, title }) => (
    <ButtonContainer onPress={onPress}>
        <ButtonText>{title}</ButtonText>
    </ButtonContainer>
);
