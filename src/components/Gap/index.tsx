import React, { FC } from 'react';
import { View } from 'react-native';
import { IGap } from '~components/Gap/type';

export const Gap: FC<IGap> = ({ scale }) => {
    return <View style={{ height: scale * 10 }} />;
};
