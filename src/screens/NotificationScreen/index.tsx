import React from 'react';
import { useTheme } from 'styled-components';

import { usePageRefresh } from '~hooks/usePageRefresh';
import {
    AdditionalInfoContainer,
    CourierContainer,
    DescriptionText,
    ImageWrapper,
    NameText,
    PersonalInfoContainer,
    RootContainer,
    styles,
    TextContainer,
    TitleText,
} from '~screens/NotificationScreen/style';

export const NotificationScreen = () => (
    <RootContainer>
        <TitleText>Notification</TitleText>
    </RootContainer>
);
