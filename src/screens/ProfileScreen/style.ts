import styled from 'styled-components/native';

import { darkTheme } from '~src/contants/theme';

export const TitleText = styled.Text<{ theme: typeof darkTheme }>`
    color: ${(props) => props.theme['TEXT_COLOR']};
    font-weight: 700;
    font-size: 24px;
`;

export const ChapterText = styled.Text<{ theme: typeof darkTheme }>`
    color: ${(props) => props.theme['TEXT_COLOR']};
    font-weight: 700;
    font-size: 14px;
`;

export const RootContainer = styled.SafeAreaView`
    flex: 1;
    margin: 20px;
`;

export const NameText = styled.Text<{ theme: typeof darkTheme }>`
    color: ${(props) => props.theme['TEXT_COLOR']};
    font-weight: 400;
    font-size: 14px;
`;

export const CardContainer = styled.View<{ theme: typeof darkTheme }>`
    background-color: ${(props) => props.theme['PRIMARY_COLOR']};
    border-radius: 20px;
    padding: 20px;
    justify-content: center;
    margin: 10px;
`;
