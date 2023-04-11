import styled from 'styled-components/native';

import { darkTheme } from '~src/contants/theme';

export const TextTitle = styled.Text<{ theme: typeof darkTheme }>`
    font-weight: 700;
    font-size: 14px;
    color: ${(props) => props.theme['TEXT_COLOR']};
`;

export const Container = styled.View<{ theme: typeof darkTheme }>`
    padding: 10px;
    background-color: ${(props) => props.theme['BUTTON_COLOR']};
    align-items: center;
    justify-content: space-around;
`;
