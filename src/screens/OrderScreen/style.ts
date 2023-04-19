import styled from 'styled-components/native';

import { darkTheme } from '~src/contants/theme';

export const TitleText = styled.Text<{ theme: typeof darkTheme }>`
    color: ${(props) => props.theme['TEXT_COLOR']};
    font-weight: 700;
    font-size: 24px;
`;

export const RootContainer = styled.SafeAreaView<{ theme: typeof darkTheme }>`
    flex: 1;
    align-items: center;
    background-color: ${(props) => props.theme['BACKGROUND_COLOR']};
    padding: 10px;
`;

export const RowContainer = styled.View`
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PriceText = styled.Text<{ theme: typeof darkTheme }>`
    color: ${(props) => props.theme['TEXT_COLOR']};
    font-weight: 400;
    font-size: 14px;
`;

export const BillContainer = styled.View<{ theme: typeof darkTheme }>`
    background-color: ${(props) => props.theme['BUTTON_COLOR']};
    align-items: center;
    width: 90%;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const RowBillContainer = styled.View<{ theme: typeof darkTheme }>`
    border-color: ${(props) => props.theme['SECONDARY_COLOR']};
    justify-content: space-between;
    padding: 10px;
    border-bottom-width: 1px;
    width: 90%;
    border-radius: 20px;
    flex-direction: row;
`;

export const RowBillContainerWithoutBorder = styled.View<{ theme: typeof darkTheme }>`
    justify-content: space-between;
    padding: 10px;
    width: 90%;
    border-radius: 20px;
    flex-direction: row;
`;
