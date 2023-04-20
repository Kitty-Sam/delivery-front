import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { width } from '~src/contants/dimensions';
import { darkTheme } from '~src/contants/theme';

export const Container = styled.TouchableOpacity<{ theme: typeof darkTheme }>`
    background-color: ${(props) => props.theme['BUTTON_COLOR']};
    align-items: center;
    justify-content: space-evenly;
    height: 200px;
    margin-bottom: 30px;
    padding: 4px;
    width: 45%;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const RootContainer = styled.SafeAreaView<{ theme: typeof darkTheme }>`
    flex: 1;
    background-color: ${(props) => props.theme['BACKGROUND_COLOR']};
`;

export const CategoriesContainer = styled.SafeAreaView`
    margin-top: 20px;
`;

export const FoodImage = styled.Image`
    height: 80px;
    width: 130px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const TextTitle = styled.Text<{ theme: typeof darkTheme }>`
    font-weight: 700;
    font-size: 14px;
    color: ${(props) => props.theme['TEXT_COLOR']};
`;

export const TextDescription = styled.Text<{ theme: typeof darkTheme }>`
    font-weight: 400;
    font-size: 8px;
    color: ${(props) => props.theme['SUBTITLE_COLOR']};
`;

export const TextPrice = styled.Text<{ theme: typeof darkTheme }>`
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => props.theme['TEXT_COLOR']};
`;

export const TextCategory = styled.Text<{ theme: typeof darkTheme }>`
    font-weight: 600;
    font-size: 10px;
    color: ${(props) => props.theme['TEXT_COLOR']};
`;

export const CategoryContainer = styled.TouchableOpacity<{ theme: typeof darkTheme }>`
    border-radius: 15px;
    margin: 10px;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 100px;
    border-color: ${(props) => props.theme['SUBTITLE_COLOR']};
    border-width: 1px;
`;

export const FavoriteContainer = styled.View<{ theme: typeof darkTheme }>`
    background-color: ${(props) => props.theme['COLORED_BUTTON']};
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 109px;
    right: 18px;
    justify-content: center;
    align-items: center;
`;

export const FoodContainer = styled.View`
    flex: 1;
    padding: 10px;
`;

export const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'space-between',
    },
    bucketIcon: {
        position: 'absolute',
        bottom: 0,
        left: width / 2.2,
    },
});
