import React, { FC } from 'react';

import { IButton } from '~components/shared/Button/ButtonCorner/type';
import { ButtonContainer, ButtonText } from '~components/shared/Button/ButtonRound/style';

export const ButtonRound: FC<IButton> = ({ onPress, title, disabled }) => (
    <ButtonContainer onPress={onPress} disabled={disabled}>
        <ButtonText>{title}</ButtonText>
    </ButtonContainer>
);
