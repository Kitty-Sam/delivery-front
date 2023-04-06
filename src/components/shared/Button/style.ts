import styled from 'styled-components/native';

export const ButtonContainer = styled.Pressable`
    width: 80%;
    padding: 10px;
    align-items: center;
    background-color: ${(props) => props.theme['COLORED_BUTTON']};
    border-radius: 10px;
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme['BUTTON_COLOR']};
`;
