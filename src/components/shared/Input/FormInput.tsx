import React, { FC } from 'react';

import { Input, LabelText } from '~components/shared/Input/style';

export interface IFormInput {
    value: string;
    onChangeText: any;
    label: string;
}

export const FormInput: FC<IFormInput> = ({ value, onChangeText, label }) => (
    <>
        <LabelText>{label}</LabelText>
        <Input value={value} onChangeText={onChangeText} placeholderTextColor="grey" />
    </>
);
