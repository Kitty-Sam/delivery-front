import styled from 'styled-components/native';

import { darkTheme } from '~src/contants/theme';

export const Container = styled.SafeAreaView<{ theme: typeof darkTheme }>`
    background-color: ${(props) => props.theme['BACKGROUND_COLOR']};
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;

export const InputsContainer = styled.View`
    width: 80%;
`;
