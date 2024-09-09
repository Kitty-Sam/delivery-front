import React from 'react';

export interface IRegularText {
    color: string;
    fontSize: number;
    fontFamily: string;
    children: React.ReactNode;
    style?: any;
    onPress?: () => void;
}
