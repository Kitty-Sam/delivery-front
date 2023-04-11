import styled from 'styled-components/native';

import { height, width } from '~src/contants/dimensions';
import { darkTheme } from '~src/contants/theme';

export const TextContainer = styled.View<{ theme: typeof darkTheme }>`
    background-color: ${(props) => props.theme['PRIMARY_COLOR']};
    width: ${width * 0.9}px;
    height: ${height * 0.6}px;
    border-top-left-radius: 20px;
    padding: 20px;
    justify-content: space-evenly;
`;

export const Gap = styled.View`
    height: 20px;
`;

export const RootContainer = styled.SafeAreaView`
    flex: 1;
    align-items: flex-end;
`;
export const RowCenteredContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const RowContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const NameAndPriceText = styled.Text<{ theme: typeof darkTheme }>`
    color: ${(props) => props.theme['TEXT_COLOR']};
    font-weight: 700;
    font-size: 24px;
`;

export const DescriptionText = styled.Text<{ theme: typeof darkTheme }>`
    color: ${(props) => props.theme['SECONDARY_COLOR']};
    font-weight: 400;
    font-size: 14px;
    line-height: 27px;
`;

export const AdditionalText = styled.Text<{ theme: typeof darkTheme }>`
    color: ${(props) => props.theme['SECONDARY_COLOR']};
    font-weight: 500;
    font-size: 17px;
`;

export const FoodImage = styled.Image<{ theme: typeof darkTheme }>`
    width: ${width * 0.9}px;
    height: ${height * 0.3}px;
    border-bottom-left-radius: 20px;
`;
