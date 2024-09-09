import React, { FC } from 'react';
import { Text } from '~components/RegularText/style';
import { IRegularText } from '~components/RegularText/type';

export const RegularText: FC<IRegularText> = ({ children, color, fontSize, fontFamily, style, onPress }) => {
    return (
        <Text color={color} fontSize={fontSize} fontFamily={fontFamily} style={style} onPress={onPress}>
            {children}
        </Text>
    );
};
