import React, { FC } from 'react';

import { initAvatar } from '~components/AvatarBlock/config';
import { Container, Image, TitleText } from '~components/AvatarBlock/style';
import { IAvatarBlock } from '~components/AvatarBlock/type';
import { getCurrentUser } from '~src/redux/selectors';
import { IUser } from '~src/redux/slices/userSlice';
import { useAppSelector } from '~src/redux/store';

export const AvatarBlock: FC<IAvatarBlock> = ({ title }) => {
    const currentUser: IUser | null = useAppSelector(getCurrentUser);
    const avatar = currentUser ? currentUser.avatar : initAvatar;

    return (
        <Container>
            <TitleText>{title}</TitleText>
            <Image source={{ uri: avatar || initAvatar }} />
        </Container>
    );
};
