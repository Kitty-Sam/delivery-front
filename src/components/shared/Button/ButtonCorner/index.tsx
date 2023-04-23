import React, { FC } from 'react';

import { ButtonContainer, ButtonText } from '~components/shared/Button/ButtonCorner/style';
import { IButton } from '~components/shared/Button/ButtonCorner/type';

export const ButtonCorner: FC<IButton> = ({ onPress, title }) => (
    <ButtonContainer onPress={onPress}>
        <ButtonText>{title}</ButtonText>
    </ButtonContainer>
);
