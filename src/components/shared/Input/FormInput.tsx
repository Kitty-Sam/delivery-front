import React, { FC } from 'react';

import { Input, LabelText } from '~components/shared/Input/style';
import { IFormInput } from '~components/shared/Input/type';
import { darkTheme } from '~src/contants/theme';

export const FormInput: FC<IFormInput> = ({ value, onChangeText, label }) => (
    <>
        <LabelText>{label}</LabelText>
        <Input value={value} onChangeText={onChangeText} placeholderTextColor={darkTheme.SECONDARY_COLOR} />
    </>
);
