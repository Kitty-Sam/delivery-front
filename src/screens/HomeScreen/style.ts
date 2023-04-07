import styled from 'styled-components/native';

import { darkTheme } from '~src/contants/theme';

export const Container = styled.TouchableOpacity<{ theme: typeof darkTheme }>`
    background-color: ${(props) => props.theme['PRIMARY_COLOR']};
    align-items: center;
    justify-content: space-evenly;
    height: 200px;
    margin-bottom: 30px;
    padding: 4px;
    width: 45%;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const RootContainer = styled.SafeAreaView`
    flex: 1;
`;

export const FoodImage = styled.Image`
    height: 80px;
    width: 130px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const TextTitle = styled.Text`
    font-weight: 700;
    font-size: 14px;
`;

export const TextDescription = styled.Text`
    font-weight: 400;
    font-size: 8px;
`;

export const TextPrice = styled.Text`
    font-weight: 700;
    font-size: 18px;
`;
