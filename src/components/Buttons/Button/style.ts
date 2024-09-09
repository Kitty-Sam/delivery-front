import styled from 'styled-components/native';

import { width } from '~src/contants/dimensions';

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${'#894AFF'};
    padding: 2% 2%;
    border-radius: 12px;
    align-items: center;
    width: ${width * 0.6}px;
`;

export const ButtonText = styled.Text`
    color: ${'#fff'};
    font-size: 20px;
`;
