import styled from 'styled-components/native';

import { darkTheme } from '~src/contants/theme';

export const CentredView = styled.View<{ theme: typeof darkTheme }>`
    //background-color: rgba(#0, 0.5);
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const ModalView = styled.View<{ theme: typeof darkTheme }>`
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    //background-color: ${(props) => props.theme['BACKGROUND_COLOR']};
    border-radius: 20px;
    //padding: 20px;
    height: 100%;
    width: 100%;
`;
