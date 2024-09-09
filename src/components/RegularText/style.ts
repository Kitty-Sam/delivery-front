import styled from 'styled-components/native';

export const Text = styled.Text<{ color: string; fontSize: number; fontFamily: string }>`
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fontSize}px;
    color: ${(props) => props.color};
`;
