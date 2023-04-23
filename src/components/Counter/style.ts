import styled from 'styled-components/native';

import { width } from '~src/contants/dimensions';
import { darkTheme } from '~src/contants/theme';

export const TextPrice = styled.Text<{ theme: typeof darkTheme }>`
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => props.theme['TEXT_COLOR']};
`;
export const CounterContainer = styled.View<{ theme: typeof darkTheme }>`
    flex-direction: row;
    justify-content: space-evenly;
    background-color: ${(props) => props.theme['COUNTER_COLORED_BUTTON']};
    padding: 5px;
    border-radius: 20px;
    align-items: center;
    width: 100px;
`;

export const RoundContainer = styled.TouchableOpacity<{ theme: typeof darkTheme }>`
    justify-content: center;
    background-color: ${(props) => props.theme['COLORED_BUTTON']};
    padding: 5px;
    border-radius: 15px;
    align-items: center;
    width: 30px;
    height: 30px;
`;
