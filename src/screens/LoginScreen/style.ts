import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: ${(props) => props.theme['PRIMARY_COLOR']};
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;

export const ButtonContainer = styled.TouchableOpacity`
    padding: 10px;
`;
export const ButtonText = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme['BUTTON_COLOR']};
`;
