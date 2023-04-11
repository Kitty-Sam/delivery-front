import styled from 'styled-components/native';

import { darkTheme } from '~src/contants/theme';

export const TitleText = styled.Text<{ theme: typeof darkTheme }>`
    color: ${(props) => props.theme['TEXT_COLOR']};
    font-weight: 700;
    font-size: 24px;
`;

export const RootContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

export const RowContainer = styled.View`
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
