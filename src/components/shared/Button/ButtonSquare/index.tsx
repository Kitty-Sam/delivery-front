import React, { FC } from 'react';

import { IButton } from '~components/shared/Button/ButtonCorner/type';
import { ButtonContainer, ButtonText } from '~components/shared/Button/ButtonSquare/style';

export const ButtonSquare: FC<IButton> = ({ onPress, title }) => (
    <ButtonContainer onPress={onPress}>
        <ButtonText>{title}</ButtonText>
    </ButtonContainer>
);
