import React, { FC } from 'react';
import { Text } from 'react-native';

import { Gap } from '~components/Gap';
import { Container, CustomTextInput, styles } from '~components/InputWithLabel/style';
import { IInputWithLabel } from '~components/InputWithLabel/type';

export const InputWithLabel: FC<IInputWithLabel> = ({ label, placeholder, onChangeText, onBlur, value }) => (
    <Container>
        <Text color="#73737d" fontSize={13}>
            {label}
        </Text>
        <Gap scale={0.5} />

        <CustomTextInput
            placeholder={placeholder}
            multiline
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
        />
    </Container>
);
