import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { width } from '~src/contants/dimensions';

export const Container = styled.TouchableOpacity`
    flex-direction: column;
    width: ${0.9 * width}px;
    margin-bottom: 10px;
`;

export const CustomTextInput = styled.TextInput`
    padding: 10px 15px;
    background-color: ${'#fff'};
    border-radius: 5px;
    font-size: 14px;
    color: ${'#141414'};
`;

export const styles = StyleSheet.create({
    phoneInputWIthMask: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        fontSize: 14,
        color: '#141414',
    },
});
