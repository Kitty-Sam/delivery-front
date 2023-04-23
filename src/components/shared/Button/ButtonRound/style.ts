import styled from 'styled-components/native';

import { darkTheme } from '~src/contants/theme';

export const ButtonContainer = styled.TouchableOpacity<{ theme: typeof darkTheme }>`
    width: 60%;
    padding: 10px;
    align-items: center;
    background-color: ${(props) => props.theme['COLORED_BUTTON']};
    border-radius: 20px;
`;

export const ButtonText = styled.Text<{ theme: typeof darkTheme }>`
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${(props) => props.theme['TEXT_COLOR']};
`;
