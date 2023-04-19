import styled from 'styled-components/native';

import { height, width } from '~src/contants/dimensions';
import { darkTheme } from '~src/contants/theme';

export const Container = styled.View`
    align-items: center;
    height: ${height * 0.3}px;
`;

export const LinksContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: ${width}px;
    padding-top: 10px;
`;

export const TitleText = styled.Text<{ theme: typeof darkTheme }>`
    font-weight: 700;
    font-size: 28px;
    padding-top: 10px;
    color: ${(props) => props.theme['TEXT_COLOR']};
`;

export const AdditionalText = styled.Text<{ theme: typeof darkTheme }>`
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme['SECONDARY_COLOR']};
`;

export const Image = styled.Image`
    width: 150px;
    height: 150px;
`;
