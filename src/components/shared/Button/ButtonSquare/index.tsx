import React, { FC } from 'react';

import { IButton } from '~components/shared/Button/ButtonCorner/type';
import { ButtonContainer, ButtonText } from '~components/shared/Button/ButtonSquare/style';
import { darkTheme } from '~src/contants/theme';

export const ButtonSquare: FC<IButton> = ({ onPress, title, disabled }) => (
    <ButtonContainer
        onPress={onPress}
        disabled={disabled}
        style={{ backgroundColor: disabled ? darkTheme.SECONDARY_COLOR : darkTheme.COLORED_BUTTON }}
    >
        <ButtonText>{title}</ButtonText>
    </ButtonContainer>
);
