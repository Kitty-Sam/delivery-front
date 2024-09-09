import styled from 'styled-components/native';

import { lightTheme } from '~src/contants/theme';

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${lightTheme.BUTTON_COLOR};
    padding: 0 10px;
    border-radius: 10px;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: ${lightTheme.TEXT_COLOR};
    font-size: 28px;
`;
