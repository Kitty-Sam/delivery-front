import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { darkTheme } from '~src/contants/theme';

export const Container = styled.View`
    justify-content: space-around;
    align-items: center;
    height: ${Dimensions.get('window').height * 0.1}px;
    flex-direction: row;
`;

export const TitleText = styled.Text<{ theme: typeof darkTheme }>`
    font-weight: 700;
    font-size: 28px;
    padding-top: 10px;
    width: 200px;
    color: ${(props) => props.theme['TITLE_COLOR']};
`;

export const Image = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;
