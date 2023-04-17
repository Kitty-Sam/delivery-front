import styled from 'styled-components/native';

import { darkTheme } from '~src/contants/theme';

export const TitleText = styled.Text<{ theme: typeof darkTheme }>`
    color: ${(props) => props.theme['TEXT_COLOR']};
    font-weight: 700;
    font-size: 24px;
`;

export const ChapterText = styled.Text<{ theme: typeof darkTheme }>`
    color: ${(props) => props.theme['TEXT_COLOR']};
    font-weight: 400;
    font-size: 18px;
`;

export const RootContainer = styled.SafeAreaView`
    flex: 1;
    margin: 20px;
`;

export const CouriersContainer = styled.View`
    flex: 1;
    margin-top: 20px;
    align-items: center;
    border-color: red;
    border-width: 1px;
`;

export const NameText = styled.Text<{ theme: typeof darkTheme }>`
    color: ${(props) => props.theme['TEXT_COLOR']};
    font-weight: 700;
    font-size: 14px;
`;

export const DescriptionText = styled.Text<{ theme: typeof darkTheme }>`
    color: ${(props) => props.theme['SECONDARY_COLOR']};
    font-weight: 600;
    font-size: 11px;
    padding-bottom: 8px;
    padding-top: 8px;
`;

export const CourierContainer = styled.View<{ theme: typeof darkTheme }>`
    background-color: ${(props) => props.theme['PRIMARY_COLOR']};
    border-radius: 20px;
    padding: 20px;
    justify-content: center;
    margin: 10px;
`;

export const PersonalInfoContainer = styled.View`
    flex-direction: row;
    padding: 4px;
    border-bottom-width: 1px;
    border-bottom-color: ${darkTheme.SECONDARY_COLOR};
`;

export const TextContainer = styled.View`
    flex-direction: column;
`;

export const AdditionalInfoContainer = styled.View<{ theme: typeof darkTheme }>`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
`;
export const ImageWrapper = styled.Image`
    width: 80px;
    height: 80px;
`;
