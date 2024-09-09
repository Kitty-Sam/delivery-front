import React, { FC } from 'react';

import { initAvatar } from '~components/AvatarBlock/config';
import { Container, Image, TitleText } from '~components/AvatarBlock/style';
import { IAvatarBlock } from '~components/AvatarBlock/type';

export const AvatarBlock: FC<IAvatarBlock> = ({ title }) => {
    const avatar = initAvatar;

    return (
        <Container>
            <TitleText>{title}</TitleText>
            <Image source={{ uri: avatar || initAvatar }} />
        </Container>
    );
};
