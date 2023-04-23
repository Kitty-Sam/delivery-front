import styled from 'styled-components/native';

import { width } from '~src/contants/dimensions';
import { darkTheme } from '~src/contants/theme';

export const Input = styled.TextInput<{ theme: typeof darkTheme }>`
    padding: 10px;
    margin-bottom: 10px;
    width: ${width * 0.8}px;
    align-items: center;
    border-bottom-color: grey;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    color: ${(props) => props.theme['TEXT_COLOR']};
`;

export const LabelText = styled.Text`
    font-size: 16px;
    color: grey;
    padding-top: 10px;
`;
