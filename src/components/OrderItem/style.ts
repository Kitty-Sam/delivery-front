import styled from 'styled-components/native';

import { width } from '~src/contants/dimensions';
import { darkTheme } from '~src/contants/theme';

export const TextTitle = styled.Text<{ theme: typeof darkTheme }>`
    font-weight: 700;
    font-size: 16px;
    color: ${(props) => props.theme['TEXT_COLOR']};
`;

export const TextDescription = styled.Text<{ theme: typeof darkTheme }>`
    font-weight: 400;
    font-size: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: ${(props) => props.theme['SUBTITLE_COLOR']};
`;

export const TextPrice = styled.Text<{ theme: typeof darkTheme }>`
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => props.theme['TEXT_COLOR']};
`;

export const FoodImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 20px;
`;

export const OrderItemContainer = styled.View<{ theme: typeof darkTheme }>`
    background-color: ${(props) => props.theme['PRIMARY_COLOR']};
    border-radius: 10px;
    margin-top: 30px;
    width: ${width * 0.9}px;
    flex-direction: row;
    padding-top: 18px;
    padding-bottom: 18px;
    align-items: center;
    justify-content: space-around;
`;
