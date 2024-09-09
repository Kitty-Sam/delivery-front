import styled from 'styled-components/native';

import { lightTheme } from '~src/contants/theme';

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${lightTheme.BUTTON_COLOR};
    width: 30px;
    height: 30px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: ${lightTheme.TEXT_COLOR};
    font-size: 16px;
`;
