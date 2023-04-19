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
    border-color: ${(props) => props.theme['TEXT_COLOR']};
    border-radius: 20px;
    padding: 20px;
    justify-content: center;
    margin: 10px;
`;

export const CheckBoxContainer = styled.TouchableOpacity<{ theme: typeof darkTheme }>`
    border-color: ${(props) => props.theme['PRIMARY_COLOR']};
    border-radius: 10px;
    width: 20px;
    height: 20px;
    border-width: 1px;
`;

export const MethodPaymentContainer = styled.View<{ theme: typeof darkTheme }>`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    margin: 10px;
    border-color: ${darkTheme.SECONDARY_COLOR};
    border-width: 1px;
    border-radius: 10px;
`;

export const AvatarImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
`;

export const AvatarBlock = styled.View`
    flex-direction: row;
    padding: 30px;
`;

export const TextAvatarBlock = styled.View`
    padding-left: 10px;
    justify-content: center;
`;

export const ButtonContainer = styled.View`
    padding-top: 50px;
    align-items: center;
`;
