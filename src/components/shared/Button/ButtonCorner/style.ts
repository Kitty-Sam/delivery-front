import styled from 'styled-components/native';

import { darkTheme } from '~src/contants/theme';

export const ButtonContainer = styled.TouchableOpacity<{ theme: typeof darkTheme }>`
    padding: 8px 10px;
    align-items: center;
    background-color: ${(props) => props.theme['COLORED_BUTTON']};
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const ButtonText = styled.Text<{ theme: typeof darkTheme }>`
    font-size: 8px;
    font-weight: 600;
    color: ${(props) => props.theme['TEXT_COLOR']};
`;
