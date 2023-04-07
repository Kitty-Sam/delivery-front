import styled from 'styled-components/native';

import { darkTheme } from '~src/contants/theme';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 20px;
`;

export const IconContainer = styled.View`
    border-radius: 20px;
    background-color: ${darkTheme.COLORED_BUTTON};
    padding: 8px;
`;

export const SearchBarInput = styled.TextInput`
    width: 65%;
    border-radius: 10px;
    background-color: ${darkTheme.COLORED_BUTTON};
    padding: 10px;
`;
