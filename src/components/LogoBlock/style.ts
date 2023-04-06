import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    height: ${Dimensions.get('window').height * 0.3}px;
`;

export const LinksContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: ${Dimensions.get('window').width}px;
    padding-top: 10px;
`;

export const TitleText = styled.Text`
    font-weight: 700;
    font-size: 28px;
    padding-top: 10px;
    color: ${(props) => props.theme['TITLE_COLOR']};
`;

export const AdditionalText = styled.Text`
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme['SECONDARY_COLOR']};
`;

export const Image = styled.Image`
    width: 150px;
    height: 150px;
`;
