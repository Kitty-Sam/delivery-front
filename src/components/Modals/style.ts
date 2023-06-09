import styled from 'styled-components/native';

import { darkTheme } from '~src/contants/theme';

export const TextTitle = styled.Text<{ theme: typeof darkTheme }>`
    font-weight: 700;
    font-size: 14px;
    color: ${(props) => props.theme['TEXT_COLOR']};
`;

export const Container = styled.View<{ theme: typeof darkTheme }>`
    padding: 30px;
    background-color: ${(props) => props.theme['BUTTON_COLOR']};
    align-items: center;
    border-radius: 20px;
`;

// address modal
export const TitleContainer = styled.View<{ theme: typeof darkTheme }>`
    flex-direction: row;
    align-items: center;
`;
